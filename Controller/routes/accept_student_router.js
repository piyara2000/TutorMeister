var express = require('express');
var router = express.Router();

const accept_student_controller = require('../backend/accept_student_controller');

router.get('/acceptStudent', accept_student_controller.acceptStudent);
router.post('/acceptStudent', accept_student_controller.acceptStudentPost);
router.post('/rejectStudent', accept_student_controller.rejectStudentPost);

module.exports = router;