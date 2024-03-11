const db = require("../common/database");
const existingStudentCourseQuery = require("../querymanager/existingStudentCourseQuery");
const { validationResult } = require("express-validator");

exports.existingStudentCourse = (req, res) => {
  if (!req.session.studentId) {
    return res.redirect("/login");
  } else {
    var dbRecordList = [];
    var courseid = req.session.courseid;
    var connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      insHomeQuery.GET_COURSE_DETAILS,
      [courseid],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.stack);
          return;
        } else {
          if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {
              console.log(result);
              var dbRecord = {
                CourseName: result[i].coursename,
                Level: result[i].level,
                Instructor: result[i].insfname + " " + result[i].inslname,
                CourseId: result[i].courseid,
                Description: result[i].description,
                Subject: result[i].subject,
                TeachingFormat: result[i].teachingformat,
                EduLevel: result[i].eduLevel,
                Mode: result[i].mode,
                TeachingStyle: result[i].teachingstyle,
              };
              // Check if video is present in the result and add it to dbRecord
              if (result[i].video !== undefined && result[i].video !== "") {
                const videoId = extractVideoId(result[i].video);
                dbRecord.Video = `https://www.youtube.com/embed/${videoId}`;
              }
              dbRecordList.push(dbRecord);
            }
            connection.end();
            res.render("existingStudentCourse", { dbRecordList: dbRecordList });
          } else {
            connection.end();
            res.render("existingStudentCourse", { dbRecordList: [] });
          }
        }
      }
    );
  }
};