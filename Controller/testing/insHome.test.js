const supertest = require('supertest');
const app = require('../app');

// Mocking the database connection
jest.mock('../common/database');
const db = require('../common/database');
const insHomeQuery = require('../querymanager/insHomeQuery');
const insHomeController = require('../backend/ins_home_controller');

describe('Instructor Home Controller', () => {
  test('insHome should render "insHome" view with course data', async () => {
    const mockSession = {
      instructorId: 1,
      instructorFname: 'John',
      instructorLname: 'Doe',
    };
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn().mockImplementation((query, values, callback) => {
        callback(null, [
          { coursename: 'Math', level: 'Intermediate', courseid: 1 },
          { coursename: 'Science', level: 'Advanced', courseid: 2 },
        ]);
      }),
      end: jest.fn(),
    };

    db.getMySQLConnection.mockReturnValueOnce(mockConnection);

    const mockReq = { session: mockSession };
    const mockRes = {
      render: jest.fn(),
      send: jest.fn(),
      redirect: jest.fn(),
    };

    await insHomeController.insHome(mockReq, mockRes);

    expect(mockConnection.connect).toHaveBeenCalled();
    expect(mockConnection.query).toHaveBeenCalledWith(
      insHomeQuery.GET_COURSE_DATA,
      [mockSession.instructorId],
      expect.any(Function)
    );
    expect(mockRes.render).toHaveBeenCalledWith('insHome', {
      dbRecordList: [
        { CourseName: 'Math', Level: 'Intermediate', Instructor: 'John Doe', CourseId: 1 },
        { CourseName: 'Science', Level: 'Advanced', Instructor: 'John Doe', CourseId: 2 },
      ],
    });
    expect(mockConnection.end).toHaveBeenCalled();
  });

  test('insHomePost should redirect to "/viewCourse" with a valid courseId', async () => {
    const mockSession = {
      instructorId: 1,
    };
    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn().mockImplementation((query, values, callback) => {
        callback(null, [{ /* course details */ }]);
      }),
      end: jest.fn(),
    };

    db.getMySQLConnection.mockReturnValueOnce(mockConnection);

    const mockReq = { session: mockSession, body: { courseId: 1 } };
    const mockRes = {
      redirect: jest.fn(),
      send: jest.fn(),
    };

    await insHomeController.insHomePost(mockReq, mockRes);

    expect(mockConnection.connect).toHaveBeenCalled();
    expect(mockConnection.query).toHaveBeenCalledWith(
      insHomeQuery.GET_COURSE_DETAILS,
      [mockReq.body.courseId],
      expect.any(Function)
    );
    expect(mockRes.redirect).toHaveBeenCalledWith('/viewCourse');
    expect(mockConnection.end).toHaveBeenCalled();
  });

});
