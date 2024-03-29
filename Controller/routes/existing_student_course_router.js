var express = require("express");
var router = express.Router();

const existing_student_course_controller = require("../backend/existing_student_course_controller");

router.get(
  "/existingStudentCourse",
  existing_student_course_controller.existingStudentCourse
);
router.post(
  "/existingStudentCourse",
  existing_student_course_controller.existingStudentCoursePost
);
router.post(
  "/schedule",
  existing_student_course_controller.scheduleMeetingPost
);
module.exports = router;
