var express = require('express');
var router = express.Router();

const schedule_request_controller = require('../backend/schedule_request_controller');


router.get('/scheduleRequest', schedule_request_controller.scheduleRequest);
// router.post('/scheduleRequest', schedule_request_controller.scheduleRequestPost);
router.post('/requestAccept', schedule_request_controller.requestAcceptPost);
router.post('/requestReject', schedule_request_controller.requestRejectPost);



module.exports = router;