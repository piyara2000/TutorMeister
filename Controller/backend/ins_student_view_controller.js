const db = require("../common/database");
const insStudentViewQuery = require("../querymanager/insStudentViewQuery");
const utils = require("../common/utils");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const session = require("express-session");

exports.insStudentView = async (req, res) => {
  try {
    if (!req.session.instructorId) {
      return res.redirect("/login");
    } else {
      var message = "You have no students that requested your courses yet.";
      var dbRecordList = [];
      var instructorId = req.session.instructorId;
      var connection = db.getMySQLConnection();
      connection.connect();

      // Query course details
      const courseDetails = await new Promise((resolve, reject) => {
        connection.query(
          insStudentViewQuery.GET_COURSE_DETAILS,
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
        const students = await new Promise((resolve, reject) => {
          connection.query(
            insStudentViewQuery.GET_STUDENTS_BY_COURSE,
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

        // Loop through students
        for (let j = 0; j < students.length; j++) {
          const studentId = students[j].student_id;
          // Query student data
          const studentData = await new Promise((resolve, reject) => {
            connection.query(
              insStudentViewQuery.GET_STUDENT_DATA,
              [studentId],
              (err, result) => {
                if (err) reject(err);
                else resolve(result);
              }
            );
          });

          // Loop through student data
          for (let k = 0; k < studentData.length; k++) {
            const dbRecord = {
              Student: studentData[k].firstname + " " + studentData[k].lastname,
              EduLevel: studentData[k].eduLevel,
              CourseName: courseName,
              StudentId: studentId,
            };
            dbRecordList.push(dbRecord);
          }
        }
      }

      connection.end();
      res.render("insStudentView", { message,  dbRecordList: dbRecordList });
    }
  } catch (error) {
    console.error(error);
    res.send(error.stack);
  }
};

exports.insStudentViewPost = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  }
  const studentId = req.body.studentId;
  req.session.userid = studentId;

  // Retrieve additional student details based on studentid
  const connection = db.getMySQLConnection();
  connection.connect();
  connection.query(
    insStudentViewQuery.GET_STUDENT_DATA,
    [studentId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err.stack);
        return;
      }

      if (result.length > 0) {
        res.redirect(`/acceptStudent`);
      } else {
        res.send("Student details not found.");
      }

      connection.end();
    }
  );
};
