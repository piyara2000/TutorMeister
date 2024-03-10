var express = require("express");
var router = express.Router();

const ins_view_course_controller = require("../backend/ins_view_course_controller");

router.get("/viewCourse", ins_view_course_controller.insViewCourse);

module.exports = router;
