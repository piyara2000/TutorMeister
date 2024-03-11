var express = require('express');
var router = express.Router();

const student_my_course_controller = require('../backend/student_my_course_controller');


router.get('/studentMyCourse', student_my_course_controller.studentMyCourse);
router.post('/studentMyCourse', student_my_course_controller.studentMyCoursePost);
module.exports = router;