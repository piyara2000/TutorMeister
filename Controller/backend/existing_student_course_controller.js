const db = require("../common/database");
const existingStudentCourseQuery = require("../querymanager/existingStudentCourseQuery");
const insHomeQuery = require("../querymanager/insHomeQuery");
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
              console.log(dbRecord.CourseId);
              connection.query(
                existingStudentCourseQuery.GET_STUDENT_RATINGS,
                [dbRecord.CourseId],
                (error, result) => {
                  if (error) {
                    console.log(error);
                    res.send(error.stack);
                    return;
                  } else {
                    if (result.length > 0) {
                      // const rating_num = result[0].rating_num;
                      let sum = 0;
                      result.forEach((row) => {
                        sum += row.rating_num;
                      });
                      const average = Math.floor(sum / result.length); // Calculate average and round down
                      console.log("Average rating:", average);
                      dbRecord.RatingSum = average;
                    }
                  }
                }
              );
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

exports.existingStudentCoursePost = (req, res) => {
  if (!req.session.studentId) {
    return res.redirect("/login");
  } else {
    var studentId = req.session.studentId;
    console.log("Student ID: ", studentId);
    const errors = validationResult(req);
    var instructorId = req.session.insId;
    console.log("Instructor ID: ", instructorId);
    var courseId = req.session.courseid;
    console.log("Course ID: ", courseId);
    var rateNum = req.body.rating1;
    console.log("Rating: ", rateNum);
    var stuReview = req.body.stuReview || "";
    stuReview = stuReview.trim();
    const connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      existingStudentCourseQuery.SEND_FEEDBACK,
      [instructorId, studentId, courseId, rateNum, stuReview],
      (err, rows) => {
        if (err) {
          return res.send(err.stack);
        } else {
          connection.end();
          res.redirect("./student-home");
        }
      }
    );
  }
};
