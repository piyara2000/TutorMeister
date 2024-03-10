//router
var express = require("express");
var router = express.Router();

const account_edit_page_controller = require("../backend/account_edit_page_controller");

router.get("/instructor-account-edit", account_edit_page_controller.insAccountEdit);
router.post("/instructor-account-edit", account_edit_page_controller.insAccountEditPost);

router.get("/student-account-edit", account_edit_page_controller.stuAccountEdit);
router.post("/student-account-edit", account_edit_page_controller.stuAccountEditPost);

module.exports = router;
