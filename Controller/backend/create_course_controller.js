const db = require("../common/database");
const createCourseQuery = require("../querymanager/createCourseQuery");
const utils = require("../common/utils");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const session = require("express-session");

exports.createCourse = (req, res) => {
    var message = "";
    var userDetails = "";
    res.render("createCourse");
};

exports.createCoursePost = (req, res) => {
    var message = "";
    const errors = validationResult(req);
    var post = req.body;
  
    var courseName = post.courseName;
    courseName = courseName.trim();
    var subject = post.subject;
    subject = subject.trim();
    var eduLevel = post.eduLevel;
    var level = post.level;
    level = level.trim();
    var teachingstyle = post.teachingStyle;
    var teachingFormat = post.teachingFormat;
    var teachingMode = post.teachingMode;
    var video = post.video;
    video = video.trim();
  
    var courseid = 0;
    if (!errors.isEmpty()) {
      const validationMessage = errors.array();
      res.render("createCourse", { message, userDetails: "", validationMessage });
    } else {
        var connection = db.getMySQLConnection();
        connection.connect();
        connection.query(
            createCourseQuery.ADD_COURSE,
            [
            courseName,
            subject,
            eduLevel,
            level,
            teachingstyle,
            teachingFormat,
            teachingMode,
            video,
            ],
            (err, rows) => {
                if (err) {
                    return res.send(err.stack);
                } else {
                    courseid = rows.insertId;
                    connection.end();
                    res.redirect("/instructor-home");
                }
            }
        );
    }
};