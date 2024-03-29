var express = require("express");
var router = express.Router();

const login_controller = require("../backend/login_controller");

router.get("/", login_controller.login);
router.post("/", login_controller.loginPost);
router.get("/health", login_controller.health);
router.get("/login", login_controller.login);
router.post("/login", login_controller.loginPost);
router.get("/logout", login_controller.logout);

module.exports = router;
