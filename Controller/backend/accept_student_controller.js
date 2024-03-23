const db = require("../common/database");
const insStudentViewQuery = require("../querymanager/insStudentViewQuery");
const utils = require("../common/utils");
const nodemailer = require("nodemailer");

exports.acceptStudent = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var dbRecordList = [];
    var studentId = req.session.userid;
    var connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      insStudentViewQuery.GET_ALL_DETAILS,
      [studentId],
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
                Student: result[0].firstname + " " + result[0].lastname,
                EduLevel: result[0].eduLevel,
                LearningStyle: result[0].learningStyle,
                LearningPace: result[0].learningPace,
                IntegerAverage: averageInteger,
                DecimalAverage: averageDecimal,
                Feedback: result[0].ins_review,
              
              }
              dbRecordList.push(dbRecord);
              console.log("Latest Review: ",dbRecord.Feedback)
              console.log("dbRecord: ", dbRecord);
              console.log("dbRecordList: ", dbRecordList);
            }
            connection.end();
            res.render("acceptStudent", { dbRecordList: dbRecordList});
          } else {
            connection.end();
            res.render("acceptStudent", { dbRecordList: []});
          }
        }
      }
    );
  }
};
// exports.acceptStudent = (req, res) => {
//   if (!req.session || !req.session.instructorId) {
//     return res.redirect("/login");
//   } else {
//     var dbRecordList = [];
//     var studentId = req.session.userid;
//     var connection = db.getMySQLConnection();
//     connection.connect();
//     connection.query(
//       insStudentViewQuery.GET_ALL_DETAILS,
//       [studentId],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           res.send(err.stack);
//           return;
//         } else {
//           if (result.length > 0) {
//             for (var i = 0; i < result.length; i++) {
//               var dbRecord = {
//                 Student: result[i].firstname + " " + result[i].lastname,
//                 EduLevel: result[i].eduLevel,
//                 LearningStyle: result[i].learningStyle,
//                 LearningPace: result[i].learningPace,
//               };
//               dbRecordList.push(dbRecord);
//             }
//             connection.end();
//             res.render("acceptStudent", { dbRecordList: dbRecordList });
//           } else {
//             connection.end();
//             res.render("acceptStudent", { dbRecordList: [] });
//           }
//         }
//       }
//     );
//   }
// };

// Function to send email
async function sendEmail(receiverEmail, courseName) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "piyarawij@gmail.com",
      pass: "dtbh oljw nozj ehgu",
    },
  });

  try {
    // Send email
    let info = await transporter.sendMail({
      from: '"TutorMeister - Tutor Matching System"', // sender address
      to: receiverEmail, // list of receivers
      subject:
        "Congratulations! You have been accepted to the " +
        courseName +
        " course.", // Subject line
      text:
        "Dear Student,\n\nCongratulations! You have been accepted to the " +
        courseName +
        " course.\n\nBest regards,\nTutorMeister - Tutor Matching System", 
    });

    console.log("Email sent to: " + receiverEmail);
  } catch (error) {
    console.error("Error occurred while sending email:", error);
  }
}

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
      } else {
          connection.connect();
          connection.query(
              insStudentViewQuery.UPDATE_REQUEST_DATA,
              [isEnrolled, studentId, courseId],
              (err, rows) => {
                  if (err) {
                      return res.send(err.stack);
                  } else {
                      // Retrieve the student's email and course name from the database
                      connection.query(
                          insStudentViewQuery.GET_STUDENT_EMAIL_AND_COURSE,
                          [studentId, courseId],
                          (err, result) => {
                              if (err) {
                                  console.log(err);
                                  res.send(err.stack);
                                  return;
                              } else {
                                  if (result.length > 0) {
                                      const studentEmail = result[0].email;
                                      const courseName = result[0].courseName;

                                      // Send acceptance email
                                      sendEmail(studentEmail, courseName);

                                      connection.end();
                                      res.redirect("/instructor-student-view");
                                  } else {
                                      connection.end();
                                      res.redirect("/instructor-student-view");
                                  }
                              }
                          }
                      );
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
    } else {
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
