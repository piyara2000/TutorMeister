//router
var express = require("express");
var router = express.Router();

const account_edit_page_controller = require("../backend/account_edit_page_controller");

router.get("/instructor-account-edit", account_edit_page_controller.insAccountEdit);
router.post("/instructor-account-edit", account_edit_page_controller.insAccountEditPost);

// router.get("/student-account-edit", account_edit_controller.stuSignUp);
// router.post("/student-account-edit", account_edit_controller.stuSignUpPost);

module.exports = router;
