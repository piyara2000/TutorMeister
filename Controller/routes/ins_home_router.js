var express = require("express");
var router = express.Router();

const ins_home_controller = require("../backend/ins_home_controller");

router.get("/instructor-home", ins_home_controller.insHome);
router.post("/instructor-home", ins_home_controller.insHomePost);

module.exports = router;
