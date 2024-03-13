const db = require("../common/database");
const studentMyCourseQuery = require("../querymanager/studentMyCourseQuery");
const insHomeQuery = require("../querymanager/insHomeQuery");
const { validationResult } = require("express-validator");

exports.studentMyCourse = (req, res) => {
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
              // Check if video is present in the result and add it to dbRecord
              if (result[i].video !== undefined && result[i].video !== "") {
                const videoId = extractVideoId(result[i].video);
                dbRecord.Video = `https://www.youtube.com/embed/${videoId}`;
              }
              dbRecordList.push(dbRecord);
            }
            connection.end();
            res.render("studentMyCourse", { dbRecordList: dbRecordList });
          } else {
            connection.end();
            res.render("studentMyCourse", { dbRecordList: [] });
          }
        }
      }
    );
  }
};
exports.studentMyCoursePost = (req, res) => {
  if (!req.session || !req.session.studentId) {
    return res.redirect("/login");
  } else {
    const errors = validationResult(req);
    var courseid = req.session.courseid;
    const studentId = req.session.studentId;
    const isEnrolled = 0;
    const connection = db.getMySQLConnection();

    if (!connection) {
      console.error("Error connecting to the database");
      res.status(500).json({ error: "Internal server error" });
      return;
    }else{
    connection.connect();
    connection.query(
      studentMyCourseQuery.ADD_STUDENT_REQUEST,
      [courseid, studentId, isEnrolled],
      (err, rows) => {
        if (err) {
          return res.send(err.stack);
        } else {
          req.session.courseId = courseid;
          connection.end();
          res.redirect("/student-home");
        }
      }
    
    );
  }
}
};

// Function to extract YouTube video ID from URL
function extractVideoId(url) {
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}