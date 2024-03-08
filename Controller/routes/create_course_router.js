var express = require('express');
var router = express.Router();

const create_course_controller = require('../backend/create_course_controller');

router.get('/create-course', create_course_controller.createCourse);
router.post('/create-course', create_course_controller.createCoursePost);

module.exports = router;