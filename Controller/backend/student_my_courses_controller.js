const db = require("../common/database");
const stuHomeQuery = require("../querymanager/stuHomeQuery");
const insHomeQuery = require("../querymanager/insHomeQuery");
const utils = require("../common/utils");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const session = require("express-session");

exports.stuCourseHome = (req, res) => {
  if (!req.session.studentId) {
    return res.redirect("/login");
  } else {
    var dbRecordList = [];
    var studentid = req.session.studentId;
    var connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      stuHomeQuery.GET_ENROLLED_COURSES,
      [studentid],
      (err, result) => {
        console.log(studentid);
        if (err) {
          console.log(err);
          res.send(err.stack);
          connection.release();
          return;
        } else {
          if (result.length > 0) {
            var courseid = result[0].courseid;
            console.log(courseid);
            connection.query(
              stuHomeQuery.GET_STUDENT_COURSES,
              [courseid],
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.send(err.stack);
                  return;
                } else if (courseid == undefined) {
                  res.render("stuCourseHome", { dbRecordList: [], message:"You have no enrolled courses yet!" });
                } else {
                  if (result.length > 0) {
                    for (var i = 0; i < result.length; i++) {
                      var dbRecord = {
                        CourseName: result[i].coursename,
                        Level: result[i].level,
                        CourseId: result[i].courseid,
                        Instructor:
                          result[i].insfname + " " + result[i].inslname,
                      };
                      dbRecordList.push(dbRecord);
                    }
                    connection.end();
                    res.render("stuCourseHome", { dbRecordList: dbRecordList });
                  }
                }
              }
            );
          } else {
            connection.end();
            res.render("stuCourseHome", { dbRecordList: [] });
          }
        }
      }
    );
  }
};
