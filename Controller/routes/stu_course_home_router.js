var express = require("express");
var router = express.Router();

const student_my_courses_controller = require("../backend/student_my_courses_controller");

router.get("/student-course-home", student_my_courses_controller.stuCourseHome);
router.post("/student-course-home", student_my_courses_controller.stuCourseHomePost);

module.exports = router;
