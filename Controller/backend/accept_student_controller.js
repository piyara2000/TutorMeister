const db = require("../common/database");
const insStudentViewQuery = require("../querymanager/insStudentViewQuery");
const utils = require("../common/utils");

exports.acceptStudent = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var dbRecordList = [];
    var studentId = req.session.userid;
    var connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      insStudentViewQuery.GET_STUDENT_DATA,
      [studentId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.stack);
          return;
        } else {
          if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
              var dbRecord = {
                Student: result[i].firstname + " " + result[i].lastname,
                EduLevel: result[i].eduLevel,
                LearningStyle: result[i].learningStyle,
                LearningPace: result[i].learningPace,
              };
              dbRecordList.push(dbRecord);
            }
            connection.end();
            res.render("acceptStudent", { dbRecordList: dbRecordList });
          } else {
            connection.end();
            res.render("acceptStudent", { dbRecordList: [] });
          }
        }
      }
    );
  }
};

exports.acceptStudentPost = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var studentId = req.session.userid;
    var courseId = req.session.course_id;
    const isEnrolled = 1;
    const connection = db.getMySQLConnection();

    if (!connection) {
      console.error("Error connecting to the database");
      res.status(500).json({ error: "Internal server error" });
      return;
    }else{
    connection.connect();
    connection.query(
      insStudentViewQuery.UPDATE_REQUEST_DATA,
      [isEnrolled, studentId, courseId],
      (err, rows) => {
        if (err) {
          return res.send(err.stack);
        } else {
          connection.end();
          res.redirect("/instructor-student-view");
        }
      }
    
    );
  }
}
};

exports.rejectStudentPost = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var requestId = req.session.request_id;
    const connection = db.getMySQLConnection();
    if (!connection) {
      console.error("Error connecting to the database");
      res.status(500).json({ error: "Internal server error" });
      return;
    }else{
    connection.connect();
    connection.query(
      insStudentViewQuery.DELETE_REQUEST_DATA,
      [requestId],
      (err, rows) => {
        if (err) {
          return res.send(err.stack);
        } else {
          connection.end();
          res.redirect("/instructor-student-view");
        }
      }
    
    );
  }
}
};