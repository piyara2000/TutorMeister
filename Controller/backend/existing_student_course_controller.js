const db = require("../common/database");
const existingStudentCourseQuery = require("../querymanager/existingStudentCourseQuery");
const { validationResult } = require("express-validator");

exports.existingStudentCourse = (req, res) => {
  if (!req.session.studentId) {
    return res.redirect("/login");
  } else {
    res.render("existingStudentCourse");
  }
};