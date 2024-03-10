const db = require("../common/database");
const loginQuery = require("../querymanager/loginQuery");
const utils = require("../common/utils");

exports.health = (req, res) => {
  res.render("health");
};

exports.login = (req, res) => {
  let message;
  res.render("login", { message });
};

exports.loginPost = (req, res) => {
  let message;
  const post = req.body;
  const username = post.username;
  const password = post.password;

  if (username && password) {
    const connection = db.getMySQLConnection();

    if (!connection) {
      res.send("Something went wrong while retrieving database credentials");
      return;
    }

    connection.connect();

    // Check instructor table
    connection.query(
      loginQuery.FETCH_USER_BY_USERNAME_INSTRUCTOR,
      [username],
      (errInstructor, rowsInstructor) => {
        if (errInstructor) {
          res.send(errInstructor.stack);
        } else {
          if (rowsInstructor.length) {
            req.session.instructorId = rowsInstructor[0].userid;
            req.session.instructorFname = rowsInstructor[0].firstname;
            req.session.instructorLname = rowsInstructor[0].lastname;
            const pwdFromDb = rowsInstructor[0].password;
            const decryptedValue = utils.getDecrptedValue(pwdFromDb);

            if (decryptedValue == password) {
              res.redirect("/instructor-home");
              connection.end();
              return;
            } else {
              message = "Incorrect Password";
              res.render("login", { message: "Incorrect Password" });
              connection.end();
              return;
            }
          }

          // If not found in the instructor table, check the student table
          connection.query(
            loginQuery.FETCH_USER_BY_USERNAME_STUDENT,
            [username],
            (errStudent, rowsStudent) => {
              if (errStudent) {
                res.send(errStudent.stack);
              } else {
                if (rowsStudent.length) {
                  req.session.studentId = rowsStudent[0].userid;
                  const pwdFromDb = rowsStudent[0].password;
                  const decryptedValue = utils.getDecrptedValue(pwdFromDb);

                  if (decryptedValue == password) {
                    res.redirect("/student-home");
                    connection.end();
                    return;
                  } else {
                    res.render("login", { message: "Incorrect Password" });
                    connection.end();
                    return;
                  }
                } else {
                  // Username not found in either table
                  res.render("login", { message: "Incorrect username" });
                }
              }
              connection.end();
            }
          );
        }
      }
    );
  } else {
    res.render("login", { message: "Please enter valid credentials" });
  }
};

exports.logout = (req, res) => {
  res.redirect("/login");
};
