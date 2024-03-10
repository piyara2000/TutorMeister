var express = require("express");
var router = express.Router();

const stu_home_controller = require("../backend/student_home_controller");

router.get("/student-home", stu_home_controller.stuHome);
router.post("/student-home", stu_home_controller.stuHomePost);

module.exports = router;
