var express = require('express');
var router = express.Router();

const community_controller = require('../backend/community_controller');

router.get('/chat', community_controller.community);

module.exports = router;