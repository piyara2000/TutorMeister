const db = require("../common/database");
const accountEditPageQuery = require("../querymanager/accountEditPageQuery");
const utils = require("../common/utils");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const session = require("express-session");
const predictLearningStyle = require("./prediction_controller");

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
                        username = userNameFromDb;
                      }
                      if (emailAddress == "") {
                        emailAddress = emailFromDb;
                      }
                      if (password == "") {
                        encryptedpwd = pwdFromDb;
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

exports.stuAccountEdit = (req, res) => {
  if (!req.session.studentId) {
    return res.redirect("/login");
  } else {
    var message = "";
    var userDetails = "";
    res.render("studentAccountEdit", { message });
  }
};

exports.stuAccountEditPost = (req, res) => {
  if (!req.session.studentId) {
    return res.redirect("/login");
  } else {
    var message = "";
    const errors = validationResult(req);
    var post = req.body;

    var studentId = req.session.studentId;
    var username = post.username;
    username = username.trim();
    var emailAddress = post.emailAddress;
    emailAddress = emailAddress.trim();
    var password = post.password;
    password = password.trim();
    var educationalQualification = post.educationalQualification;
    var preLearningStyle = post.preLearningStyle;
    var learningPace = post.learningPace;
    var learningType = post.learningType;
    var learningMode = post.learningMode;
    var learningPreferences = post.learningPreferences;

    var encryptedpwd = "";

    if (!errors.isEmpty()) {
      const validationMessage = errors.array();
      res.render("studentAccountEdit", {
        message,
        userDetails: "",
        validationMessage,
      });
    } else {
      var encryptedpwd = utils.getEncrptedValue(password);
      var connection = db.getMySQLConnection();
      connection.connect();
      connection.query(
        accountEditPageQuery.GET_EXISTING_DATA_STUDENT,
        [username],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send(err.stack);
            return;
          }
          if (result.length > 0) {
            message = username + ", Username already exists!";
            res.render("studentAccountEdit", { message, userDetails: "" });
          } else {
            connection.query(
              accountEditPageQuery.FETCH_USER_DETAILS_BY_STUDENTID,
              [studentId],
              (errStudent, rowsStudent) => {
                if (errStudent) {
                  res.send(errStudent.stack);
                } else {
                  if (rowsStudent.length) {
                    const userNameFromDb = rowsStudent[0].username;
                    const emailFromDb = rowsStudent[0].email;
                    const pwdFromDb = rowsStudent[0].password;
                    const eduLevelFromDb = rowsStudent[0].eduLevel;
                    const learningStyleFromDb = rowsStudent[0].learningStyle;
                    const learningPaceFromDb = rowsStudent[0].learningPace;
                    const learningTypeFromDb = rowsStudent[0].isGroup;
                    const modeFromDb = rowsStudent[0].mode;
                    const notesFromDb = rowsStudent[0].notes;
                    const decryptedValue = utils.getDecrptedValue(pwdFromDb);
                    if (decryptedValue == password) {
                      res.render("studentAccountEdit", {
                        message: "Cannot use the same password",
                      });
                      return;
                    } else {
                      if (username == "") {
                        username = userNameFromDb;
                      }
                      if (emailAddress == "") {
                        emailAddress = emailFromDb;
                      }
                      if (password == "") {
                        encryptedpwd = pwdFromDb;
                      }
                      if (educationalQualification == undefined) {
                        educationalQualification = eduLevelFromDb;
                      }
                      if (preLearningStyle == undefined) {
                        preLearningStyle = learningStyleFromDb;
                      }
                      if (learningPace == undefined) {
                        learningPace = learningPaceFromDb;
                      }
                      if (learningType == undefined) {
                        learningType = learningTypeFromDb;
                      }
                      if (learningMode == undefined) {
                        learningMode = modeFromDb;
                      }

                      var learningPreferences = ""; // Initialize learning style variable

                      // If additional learning preferences are provided, predict learning style
                      if (post.learningPreferences) {
                        learningPreferences = predictLearningStyle(
                          post.learningPreferences
                        );
                      } else {
                        // If no additional learning preferences are provided, use the existing learning style
                        learningPreferences = learningStyleFromDb;
                      }

                      connection.query(
                        accountEditPageQuery.UPDATE_STUDENT,
                        [
                          username,
                          emailAddress,
                          encryptedpwd,
                          educationalQualification,
                          preLearningStyle,
                          learningPace,
                          learningType,
                          learningMode,
                          learningPreferences,
                          studentId,
                        ],
                        (err, rows) => {
                          if (err) {
                            return res.send(err.stack);
                          } else {
                            connection.end();
                            res.redirect("/student-home");
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
