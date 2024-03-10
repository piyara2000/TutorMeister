const supertest = require('supertest');
const app = require('../app');

// Mocking the database connection
jest.mock('../common/database');
const db = require('../common/database');
const createCourseQuery = require('../querymanager/createCourseQuery');
const createCourseController = require('../backend/create_course_controller');
const { validationResult } = require('express-validator');

describe('Create Course Controller', () => {
  test('createCourse should render "createCourse" view', async () => {
    const mockSession = {
      instructorId: 1,
    };
    const mockReq = { session: mockSession };
    const mockRes = {
      render: jest.fn(),
      redirect: jest.fn(),
    };

    await createCourseController.createCourse(mockReq, mockRes);

    expect(mockRes.render).toHaveBeenCalledWith('createCourse');
  });

  test('createCoursePost should redirect to "/instructor-home" on successful course creation', async () => {
    const mockSession = {
      instructorId: 1,
    };
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn().mockImplementation((query, values, callback) => {
        callback(null, { insertId: 1 }); // Mocking successful course insertion
      }),
      end: jest.fn(),
    };

    db.getMySQLConnection.mockReturnValueOnce(mockConnection);
    jest.mock('express-validator', () => ({
        ...jest.requireActual('express-validator'),
        validationResult: jest.fn(() => ({ isEmpty: true })),
      }));

    const mockReq = {
      session: mockSession,
      body: {
        courseName: 'Math 101',
        subject: 'Mathematics',
        eduLevel: 'High School',
        level: 'Intermediate',
        teachingStyle: 'Interactive',
        teachingFormat: 'Online',
        teachingMode: 'Live',
        video: 'https://example.com/math101',
        description: 'Introduction to mathematics.',
      },
    };
    const mockRes = {
      redirect: jest.fn(),
      render: jest.fn(),
      send: jest.fn(),
    };

    await createCourseController.createCoursePost(mockReq, mockRes);

    expect(mockConnection.connect).toHaveBeenCalled();
    expect(mockConnection.query).toHaveBeenCalledWith(
      createCourseQuery.ADD_COURSE,
      [
        'Math 101',
        'Mathematics',
        'High School',
        'Intermediate',
        'Interactive',
        'Online',
        'Live',
        'https://example.com/math101',
        1, // instructorId
        'Introduction to mathematics.',
      ],
      expect.any(Function)
    );
    expect(mockRes.redirect).toHaveBeenCalledWith('/instructor-home');
    expect(mockReq.session.courseId).toBe(1);
    expect(mockConnection.end).toHaveBeenCalled();
  });

});
