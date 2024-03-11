const db = require("../common/database");
const studentMyCourseQuery = require("../querymanager/studentMyCourseQuery");
const { validationResult } = require("express-validator");

exports.studentMyCourse = (req, res) => {
  if (!req.session.studentId) {
    return res.redirect("/login");
  } else {
    res.render("studentMyCourse");
  }
};
exports.studentMyCoursePost = (req, res) => {
  if (!req.session || !req.session.studentId) {
    return res.redirect("/login");
  } else {
    const errors = validationResult(req);
    var courseid = req.session.courseid;
    const studentId = req.session.studentId;
    const isEnrolled = 'NO';
    const connection = db.getMySQLConnection();

    if (!connection) {
      console.error("Error connecting to the database");
      res.status(500).json({ error: "Internal server error" });
      return;
    }else{
    connection.connect();
    connection.query(
      studentMyCourseQuery.ADD_STUDENT_REQUEST,

      [courseid, studentId,isEnrolled],
      (err, rows) => {
        if (err) {
          return res.send(err.stack);
        } else {
          courseId = rows.courseid;
          req.session.courseId = courseid;
          connection.end();
          res.redirect("/student-home");
        }
      }
    
    );
  }
}
};
