const db = require("../common/database");
const scheduleRequestQuery = require("../querymanager/scheduleRequestQuery");
const utils = require("../common/utils");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const session = require("express-session");
const nodemailer = require("nodemailer");

exports.scheduleRequest = async (req, res) => {
  try {
    if (!req.session.instructorId) {
      return res.redirect("/login");
    } else {
      var message = "You have no students that scheduled for your course yet.";
      var dbRecordList = [];
      var instructorId = req.session.instructorId;
      var connection = db.getMySQLConnection();
      connection.connect();

      // Query course details
      const courseDetails = await new Promise((resolve, reject) => {
        connection.query(
          scheduleRequestQuery.GET_COURSE_DETAILS,
          [instructorId],
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        );
      });

      // Loop through course details
      for (let i = 0; i < courseDetails.length; i++) {
        const courseId = courseDetails[i].courseid;
        const courseName = courseDetails[i].coursename;
      
        // Query students by course
        const scheduleRequest = await new Promise((resolve, reject) => {
          connection.query(
            scheduleRequestQuery.GET_SCHEDULED_MEETINGS,
            [courseId],
            (err, result) => {
              if (err) reject(err);
              if (result.length > 0) {
                message = ""; // Reset message if students are found
                resolve(result);
              } else {
                resolve(result); // Resolve with empty result
              }
            }
          );
        });

        // Loop through student data
        for (let k = 0; k < scheduleRequest.length; k++) {
          
          const dbRecord = {
            StudentId: scheduleRequest[k].student_id,
            Student: scheduleRequest[k].student_name,
            EduLevel: scheduleRequest[k].eduLevel,
            learningStyle: scheduleRequest[k].learningStyle,
            CourseName: courseName,
            CourseId:courseId,
            ScheduledDate: scheduleRequest[k].scheduled_date,
            ScheduledTime: scheduleRequest[k].scheduled_time,
            ScheduleId: scheduleRequest[k].schedule_id,
          };
          dbRecordList.push(dbRecord);
        }       
      }
      connection.end();
      res.render("scheduleRequest", { message, dbRecordList: dbRecordList });
    }
  } catch (error) {
    console.error(error);
    res.send(error.stack);
  }
};

// Function to send email
async function sendEmail(receiverEmail, courseName,ScheduledTime, ScheduledDate) {
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
        "Congratulations! You have been accepted to the course for your selected date " +
        ScheduledDate + " and time " + ScheduledTime,
        
      text:
        "Dear Student,\n\nCongratulations! You have been accepted to the " +
        courseName + " for the given schedule."+
        " \n\nBest regards,\nTutorMeister - Tutor Matching System", 
    });
    
  } catch (error) {
    console.error("Error occurred while sending email:", error);
   
  }
}

exports.requestAcceptPost = (req, res) => {
  
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var ScheduledTime = req.body.ScheduledTime;
    var ScheduledDate = req.body.ScheduledDate;
    var courseId = req.body.courseId;
    var scheduleId = req.body.scheduleId;
    var studentId = req.body.studentId;
    

    const connection = db.getMySQLConnection();
    if (!connection) {
      console.error("Error connecting to the database");
      res.status(500).json({ error: "Internal server error" });
      return;
    } else {
      connection.connect();
      connection.query(
        scheduleRequestQuery.GET_STUDENT_EMAIL_AND_COURSE,
        [studentId, courseId],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send(err.stack);
            return;
          } else if (result.length > 0) {
            const studentEmail = result[0].email;
            const courseName = result[0].courseName;
       
          
            // Send acceptance email
            sendEmail(studentEmail, courseName,ScheduledTime,ScheduledDate);
            // Email sent successfully, delete record from the database
            console.log("Email sent to : ",studentEmail);
           
            connection.query(
              scheduleRequestQuery.DELETE_SCHEDULING_DATA,
              [scheduleId],
              (err, deleteResult) => {
                if (err) {
                  console.error("Error deleting record from the database:", err);
                  res.status(500).json({ error: "Internal server error" });
                  return;
                }
                connection.end();
                res.redirect("/instructor-home");
              }
            );
          }
        }
      );
    }
  }
};


exports.requestRejectPost = (req, res) => {
  // Check if instructor is logged in
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  }

  // Retrieve data from request body
  const { scheduleId, ScheduledDate, ScheduledTime } = req.body;

  // Get a connection to the database
  const connection = db.getMySQLConnection();
  if (!connection) {
    console.error("Error connecting to the database");
    return res.status(500).json({ error: "Internal server error" });
  }

  // Connect to the database
  connection.connect();

  // Perform database query to delete scheduling data
  connection.query(
    scheduleRequestQuery.DELETE_SCHEDULING_DATA,
    [scheduleId, ScheduledDate, ScheduledTime],
    (err, result) => {
      // Handle query error
      if (err) {
        console.error("Error deleting record from the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      // Redirect to instructor home on successful deletion
      res.redirect("/instructor-home");
    }
  );
};
