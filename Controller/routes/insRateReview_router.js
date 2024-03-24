var express = require('express');
var router = express.Router();

const insRateReviewController = require('../backend/insRateReviewController');

router.get('/ins-RateReview', insRateReviewController.insRateReview);
router.post('/ins-RateReview', insRateReviewController.insRateReviewPost);

module.exports = router;