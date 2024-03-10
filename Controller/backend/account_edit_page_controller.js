const db = require("../common/database");
const accountEditPageQuery = require("../querymanager/accountEditPageQuery");
const utils = require("../common/utils");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const session = require("express-session");

exports.insAccountEdit = (req, res) => {
  if (!req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var message = "";
    var userDetails = "";
    res.render("instructorAccountEdit", { message });
  }
};

exports.insAccountEditPost = (req, res) => {
  if (!req.session.instructorId) {
    return res.redirect("/login");
  } else {
    var message = "";
    const errors = validationResult(req);
    var post = req.body;

    var instructorId = req.session.instructorId;
    var username = post.username;
    username = username.trim();
    var emailAddress = post.emailAddress;
    emailAddress = emailAddress.trim();
    var password = post.password;
    password = password.trim();

    var encryptedpwd = "";

    if (!errors.isEmpty()) {
      const validationMessage = errors.array();
      res.render("instructorAccountEdit", {
        message,
        userDetails: "",
        validationMessage,
      });
    } else {
      var encryptedpwd = utils.getEncrptedValue(password);
      var connection = db.getMySQLConnection();
      connection.connect();
      connection.query(
        accountEditPageQuery.GET_EXISTING_DATA_INSTRUCTOR,
        [username],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send(err.stack);
            return;
          }
          if (result.length > 0) {
            message = username + ", Username already exists!";
            res.render("instructorAccountEdit", { message, userDetails: "" });
          } else {
            connection.query(
              accountEditPageQuery.FETCH_USER_DETAILS_BY_INSTRUCTORID,
              [instructorId],
              (errInstructor, rowsInstructor) => {
                if (errInstructor) {
                  res.send(errInstructor.stack);
                } else {
                  if (rowsInstructor.length) {
                    const userNameFromDb = rowsInstructor[0].username;
                    const emailFromDb = rowsInstructor[0].email;
                    const pwdFromDb = rowsInstructor[0].password;
                    const decryptedValue = utils.getDecrptedValue(pwdFromDb);
                    if (decryptedValue == password) {
                      res.render("instructorAccountEdit", {
                        message: "Cannot use the same password",
                      });
                      return;
                    } else {
                      if (username == "") {
                        username = userNameFromDb
                      }
                      if (emailAddress == "") {
                        emailAddress = emailFromDb
                      }
                      if (password == "") {
                        encryptedpwd = pwdFromDb
                      }
                      connection.query(
                        accountEditPageQuery.UPDATE_INSTRUCTOR,
                        [username, emailAddress, encryptedpwd, instructorId],
                        (err, rows) => {
                          if (err) {
                            return res.send(err.stack);
                          } else {
                            connection.end();
                            res.redirect("/instructor-home");
                          }
                        }
                      );
                    }
                  }
                }
              }
            );
          }
        }
      );
    }
  }
};
