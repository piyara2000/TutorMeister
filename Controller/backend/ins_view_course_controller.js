const db = require("../common/database");
const insHomeQuery = require("../querymanager/insHomeQuery");
const existingStudentCourseQuery = require("../querymanager/existingStudentCourseQuery");
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
      // insHomeQuery.GET_COURSE_DETAILS,
      existingStudentCourseQuery.GET_ALL_DETAILS,
      [courseid],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.stack);
          return;
        } else {
          if (result.length > 0) {
            let sum = 0;
            result.forEach((row) => {
              sum += row.rating_num;
            });
            const totalCount = result.length;
            const averageInteger = Math.floor(sum / totalCount);
            const averageDecimal = (sum / totalCount).toFixed(2);
            console.log("Sum of rating_num:", sum);
            console.log("Integer Average:", averageInteger);
            console.log("Decimal Average:", averageDecimal);
            result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            if (result.length > 0) {
              let dbRecord = {
                CourseName: result[0].coursename,
                Level: result[0].level,
                Instructor: result[0].insfname + " " + result[0].inslname,
                CourseId: result[0].courseid,
                Description: result[0].description,
                Subject: result[0].subject,
                TeachingFormat: result[0].teachingformat,
                EduLevel: result[0].eduLevel,
                Mode: result[0].mode,
                TeachingStyle: result[0].teachingstyle,
                IntegerAverage: averageInteger,
                DecimalAverage: averageDecimal,
                Feedback: result[0].stu_review,
              };
              if (result[0].video !== undefined && result[0].video !== "") {
                const videoId = extractVideoId(result[0].video);
                dbRecord.Video = `https://www.youtube.com/embed/${videoId}`;
              }
              dbRecordList.push(dbRecord);
              console.log("Latest Review: ",dbRecord.Feedback)
              console.log("dbRecord: ", dbRecord);
              console.log("dbRecordList: ", dbRecordList);
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
