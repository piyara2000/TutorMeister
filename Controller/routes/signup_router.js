var express = require('express');
var router = express.Router();

const signup_controller = require('../backend/signup_controller');

router.get('/instructor-register', signup_controller.insSignUp);
router.post('/instructor-register', signup_controller.insSignUpPost);

module.exports = router;