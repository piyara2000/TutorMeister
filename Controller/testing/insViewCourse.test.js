const supertest = require('supertest');
const app = require('../app'); // Update the path to your app file

// Mocking the database connection
jest.mock('../common/database');
const db = require('../common/database');
const insHomeQuery = require('../querymanager/insHomeQuery');
const insViewCourseController = require('../backend/ins_view_course_controller');

describe('Instructor View Course Controller', () => {
  test('insViewCourse should render "viewCourse" view with course details', async () => {
    const mockSession = {
      instructorId: 1,
      instructorFname: 'John',
      instructorLname: 'Doe',
      courseid: 1,
    };

    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn().mockImplementation((query, values, callback) => {
        callback(null, [
          {
            coursename: 'Math 101',
            level: 'Intermediate',
            courseid: 1,
            description: 'Introduction to mathematics.',
            subject: 'Mathematics',
            teachingformat: 'Online',
            eduLevel: 'High School',
            mode: 'Live',
            teachingstyle: 'Interactive',
          },
        ]);
      }),
      end: jest.fn(),
    };

    db.getMySQLConnection.mockReturnValueOnce(mockConnection);

    const mockReq = { session: mockSession };
    const mockRes = {
      render: jest.fn(),
      redirect: jest.fn(),
      send: jest.fn(),
    };

    await insViewCourseController.insViewCourse(mockReq, mockRes);

    expect(mockConnection.connect).toHaveBeenCalled();
    expect(mockConnection.query).toHaveBeenCalledWith(
      insHomeQuery.GET_COURSE_DETAILS,
      [mockSession.courseid],
      expect.any(Function)
    );

    const expectedDbRecordList = [
      {
        CourseName: 'Math 101',
        Level: 'Intermediate',
        Instructor: 'John Doe',
        CourseId: 1,
        Description: 'Introduction to mathematics.',
        Subject: 'Mathematics',
        TeachingFormat: 'Online',
        EduLevel: 'High School',
        Mode: 'Live',
        TeachingStyle: 'Interactive',
      },
    ];

    expect(mockRes.render).toHaveBeenCalledWith('viewCourse', {
      dbRecordList: expectedDbRecordList,
    });

    expect(mockConnection.end).toHaveBeenCalled();
  });
});
