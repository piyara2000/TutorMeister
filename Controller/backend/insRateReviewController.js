const db = require("../common/database");
const insRateReviewQuery = require("../querymanager/insRateReviewQuery");
const utils = require("../common/utils");
const { validationResult } = require("express-validator");
const { request } = require("express");

exports.insRateReview = (req, res) => {
  if (!req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var dbRecordList = [];
    var studentId=req.session.userid;
    // Retrieve additional student details based on studentid
    const connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      insRateReviewQuery.GET_STUDENT_DATA,
      [studentId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.stack);
          return;
        }
        if (result.length > 0) {
          for (var i = 0; i < result.length; i++) {
            var dbRecord = {

              Name: result[i].firstname + " " + result[i].lastname,
              Subject: result[i].eduLevel,

            };
            // Check if video is present in the result and add it to dbRec
            dbRecordList.push(dbRecord);
          }
          connection.end();
          res.render("insRateReview", { dbRecordList: dbRecordList });
        } else {
          connection.end();
          res.render("insRateReview", { dbRecordList: [] });
        }
      })
  }
};
exports.insRateReviewPost = (req, res) => {
  if (!req.session || !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var studentId = req.session.userid;
    const errors = validationResult(req);
    const instructorId = req.session.instructorId;
    var courseId = req.session.course_id;
    var rating_num = req.body.rating_num;
    var ins_review = req.body.ins_review || '';
    ins_review = ins_review.trim();
    const connection = db.getMySQLConnection();

    if (!connection) {
      console.error("Error connecting to the database");
      res.status(500).json({ error: "Internal server error" });
      return;
    } else {
      connection.connect();
      connection.query(
        insRateReviewQuery.ADD_STUDENT_REVIEW,
        [instructorId, studentId, courseId, rating_num, ins_review],
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








