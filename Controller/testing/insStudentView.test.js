jest.mock("../common/database", () => ({
    getMySQLConnection: () => ({
      connect: jest.fn(),
      query: jest.fn((sql, params, callback) => {
        if (sql.includes("GET_COURSE_DETAILS")) {
          callback(null, [{ courseid: 1, coursename: "Test Course" }]);
        } else if (sql.includes("GET_STUDENTS_BY_COURSE")) {
          callback(null, [{ student_id: "studentId", request_id: "requestId" }]);
        } else if (sql.includes("GET_STUDENT_DATA")) {
          callback(null, [{ firstname: "John", lastname: "Doe", eduLevel: "Bachelor" }]);
        }
      }),
      end: jest.fn(),
    }),
  }));
  
  const { insStudentView, insStudentViewPost } = require("../backend/ins_student_view_controller");
  
  // Mock `insStudentViewQuery` if needed, similar to your approach, but it's omitted here for brevity
  
  // Mocked express-validator
  jest.mock('express-validator', () => ({
    validationResult: jest.fn().mockReturnValue({ isEmpty: () => true }),
    check: jest.fn()
  }));
  
  describe("Controller Functions", () => {
    let req;
    let res;
  
    beforeEach(() => {
      req = {
        session: {
          instructorId: "1",
        },
        body: {
          studentId: "studentId",
          courseId: "courseId",
          requestId: "requestId",
        },
      };
  
      res = {
        redirect: jest.fn(),
        render: jest.fn(),
        send: jest.fn(),
      };
    });
  
    describe("insStudentView", () => {
      test("should redirect to login if no instructorId in session", async () => {
        req.session = {}; // simulate no instructorId in session
        await insStudentView(req, res);
        expect(res.redirect).toHaveBeenCalledWith("/login");
      });
    });
  
    describe("insStudentViewPost", () => {
      test("should redirect to login if no instructorId in session", async () => {
        req.session = {}; // simulate no instructorId in session
        await insStudentViewPost(req, res);
        expect(res.redirect).toHaveBeenCalledWith("/login");
      });
    });
  });
  