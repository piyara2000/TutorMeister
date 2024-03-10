const supertest = require('supertest');
const app = require('../app');

// Mocking the database connection
jest.mock('../common/database');
const db = require('../common/database');
const stuHomeQuery = require('../querymanager/stuHomeQuery');
const insHomeQuery = require('../querymanager/insHomeQuery');
const studentHomeController = require('../backend/student_home_controller');

describe('Student Home Controller', () => {
  test('stuHome should render "studentHome" view with course details', async () => {
    const mockSession = {
      studentId: 1,
    };

    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn().mockImplementation((query, values, callback) => {
        if (query === stuHomeQuery.GET_STUDENT_LEARNING_STYLE) {
          callback(null, [{ learningStyle: 'visual' }]);
        } else if (query === stuHomeQuery.GET_STUDENT_COURSES) {
          callback(null, [
            {
              coursename: 'Math 101',
              level: 'Intermediate',
              courseid: 1,
              insfname: 'John',
              inslname: 'Doe',
            },
          ]);
        }
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

    await studentHomeController.stuHome(mockReq, mockRes);

    expect(mockConnection.connect).toHaveBeenCalled();
    expect(mockConnection.query).toHaveBeenCalledWith(
      stuHomeQuery.GET_STUDENT_LEARNING_STYLE,
      [mockSession.studentId],
      expect.any(Function)
    );

    expect(mockConnection.query).toHaveBeenCalledWith(
      stuHomeQuery.GET_STUDENT_COURSES,
      ['visual'],
      expect.any(Function)
    );

    const expectedDbRecordList = [
      {
        CourseName: 'Math 101',
        Level: 'Intermediate',
        CourseId: 1,
        Instructor: 'John Doe',
      },
    ];

    expect(mockRes.render).toHaveBeenCalledWith('studentHome', {
      dbRecordList: expectedDbRecordList,
    });

    expect(mockConnection.end).toHaveBeenCalled();
  });

  test('stuHomePost should redirect to "/studentMyCourse" on successful course selection', async () => {
    const mockSession = {
      studentId: 1,
    };

    const mockConnection = {
      connect: jest.fn(),
      query: jest.fn().mockImplementation((query, values, callback) => {
        callback(null, [
          {
            coursename: 'Math 101',
            level: 'Intermediate',
            courseid: 1,
          },
        ]);
      }),
      end: jest.fn(),
    };

    db.getMySQLConnection.mockReturnValueOnce(mockConnection);

    const mockReq = {
      session: mockSession,
      body: { courseId: 1 },
    };
    const mockRes = {
      redirect: jest.fn(),
      send: jest.fn(),
    };

    await studentHomeController.stuHomePost(mockReq, mockRes);

    expect(mockConnection.connect).toHaveBeenCalled();
    expect(mockConnection.query).toHaveBeenCalledWith(
      insHomeQuery.GET_COURSE_DETAILS,
      [mockReq.body.courseId],
      expect.any(Function)
    );

    expect(mockRes.redirect).toHaveBeenCalledWith('/studentMyCourse');

    expect(mockConnection.end).toHaveBeenCalled();
  });
});
