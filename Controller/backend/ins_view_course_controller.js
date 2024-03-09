const db = require("../common/database");
const insHomeQuery = require("../querymanager/insHomeQuery");
const utils = require("../common/utils");

exports.insViewCourse = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var dbRecordList = [];
    var courseid = req.session.courseid;
    var insFname = req.session.instructorFname;
    var insLname = req.session.instructorLname;
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
                Instructor: insFname + " " + insLname,
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
            res.render("viewCourse", { dbRecordList: dbRecordList });
          } else {
            connection.end();
            res.render("viewCourse", { dbRecordList: [] });
          }
        }
      }
    );
  }
};

// Function to extract YouTube video ID from URL
function extractVideoId(url) {
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
