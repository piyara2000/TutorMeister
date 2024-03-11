var express = require("express");
var router = express.Router();

const ins_student_view_controller = require("../backend/ins_student_view_controller");

router.get("/instructor-student-view", ins_student_view_controller.insStudentView);
router.post("/instructor-student-view", ins_student_view_controller.insStudentViewPost);

module.exports = router;