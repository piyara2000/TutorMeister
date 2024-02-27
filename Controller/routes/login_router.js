var express = require('express');
var router = express.Router();

const ins_login_controller = require('../backend/ins_login_controller');

router.get('/health', ins_login_controller.health);

module.exports = router;