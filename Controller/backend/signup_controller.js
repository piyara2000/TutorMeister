const db = require("../common/database");
const signUpQuery = require("../querymanager/signUpQuery");
const utils = require("../common/utils");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const session = require("express-session");

exports.insSignUp = (req, res) => {
  var message = "";
  var userDetails = "";
  res.render("insSignUp");
};

exports.insSignUpPost = (req, res) => {
  var message = "";
  const errors = validationResult(req);
  var post = req.body;

  var firstname = post.firstname;
  firstname = firstname.trim();
  var lastname = post.lastname;
  lastname = lastname.trim();
  var username = post.username;
  username = username.trim();
  var country = post.country;
  country = country.trim();
  var email = post.email;
  email = email.trim();
  var password = post.password;
  password = password.trim();

  var userid = 0;
  var encryptedpwd = "";

  if (!errors.isEmpty()) {
    const validationMessage = errors.array();
    res.render("insSignUp", { message, userDetails: "", validationMessage });
  } else {
    var encryptedpwd = utils.getEncrptedValue(password);
    var connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      signUpQuery.VALIDATE_USER_EXISTS,
      [username],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.stack);
          return;
        }
        if (result.length > 0) {
          message = username + ", Username already exists!";
          res.render("insSignUp", { message, userDetails: "" });
        } else {
          connection.query(
            signUpQuery.ADD_INSTRUCTOR,
            [firstname, lastname, username, country, email, encryptedpwd],
            (err, rows) => {
              if (err) {
                res.send(err.stack);
              } else {
                userid = rows.insertId;
                connection.end();
              }
            }
          );
          res.redirect("/login");
        }
      }
    );
  }
};

exports.stuSignUp = (req, res) => {
  var message = "";
  var userDetails = "";
  res.render("stuSignUp");
};

exports.stuSignUpPost = (req, res) => {
  var message = "";
  const errors = validationResult(req);
  var post = req.body;

  var firstname = post.stufirstname;
  firstname = firstname.trim();
  var lastname = post.stulastname;
  lastname = lastname.trim();
  var username = post.stuusername;
  username = username.trim();
  var country = post.stucountry;
  country = country.trim();
  var email = post.stuemail;
  email = email.trim();
  var password = post.stupassword;
  password = password.trim();
  var eduqual = post.eduQual;
  var learningStyle = post.learningStyle;
  var learningPace = post.learningPace;
  var isGroup = post.isGroup;
  var learningMode = post.learningMode;
  var additionalText = post.additionalText;

  var userid = 0;
  var encryptedpwd = "";

  if (!errors.isEmpty()) {
    const validationMessage = errors.array();
    res.render("stuSignUp", { message, userDetails: "", validationMessage });
  } else {
    var encryptedpwd = utils.getEncrptedValue(password);
    var connection = db.getMySQLConnection();
    connection.connect();
    connection.query(
      signUpQuery.VALIDATE_USER_EXISTS_STUDENT,
      [username],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err.stack);
          return;
        }
        if (result.length > 0) {
          message = username + ", Username already exists!";
          res.render("stuSignUp", { message, userDetails: "" });
        } else {
          connection.query(
            signUpQuery.ADD_STUDENT,
            [
              firstname,
              lastname,
              username,
              country,
              email,
              eduqual,
              learningStyle,
              learningPace,
              isGroup,
              learningMode,
              additionalText,
              encryptedpwd,
            ],
            (err, rows) => {
              if (err) {
                return res.send(err.stack);
              } else {
                userid = rows.insertId;
                connection.end();
                res.redirect("/login");
              }
            }
          );
        }
      }
    );
  }
};
