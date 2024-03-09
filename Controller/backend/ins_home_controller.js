const db = require("../common/database");
const insHomeQuery = require("../querymanager/insHomeQuery");
const utils = require("../common/utils");

exports.insHome = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var dbRecordList = [];
    var instructorId = req.session.instructorId;
    var insFname = req.session.instructorFname;
    var insLname = req.session.instructorLname;
    var connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      insHomeQuery.GET_COURSE_DATA,
      [instructorId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.stack);
          return;
        } else {
          if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
              var dbRecord = {
                CourseName: result[i].coursename,
                Level: result[i].level,
                Instructor: insFname + " " + insLname,
                CourseId: result[i].courseid,
              };
              dbRecordList.push(dbRecord);
            }
            connection.end();
            res.render("insHome", { dbRecordList: dbRecordList });
          } else {
            connection.end();
            res.render("insHome", { dbRecordList: [] });
          }
        }
      }
    );
  }
};

exports.insHomePost = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  }
  const courseId = req.body.courseId;
  req.session.courseid = courseId;

  // Retrieve additional course details based on courseId
  const connection = db.getMySQLConnection();
  connection.connect();
  connection.query(
    insHomeQuery.GET_COURSE_DETAILS,
    [courseId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err.stack);
        return;
      }

      if (result.length > 0) {
        res.redirect(`/viewCourse`);
      } else {
        res.send("Course details not found.");
      }

      connection.end();
    }
  );
};
