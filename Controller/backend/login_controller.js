const db = require("../common/database");
const loginQuery = require("../querymanager/loginQuery");
const utils = require('../common/utils');

exports.health = (req, res) => {
  res.render('health');
}

exports.login = (req, res) => {
  res.render('login');
}

exports.loginPost = (req, res) => {
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
    connection.query(loginQuery.FETCH_USER_BY_USERNAME_INSTRUCTOR, [username], (errInstructor, rowsInstructor) => {
      if (errInstructor) {
        res.send(errInstructor.stack);
      } else {
        if (rowsInstructor.length) {
          const pwdFromDb = rowsInstructor[0].password;
          const decryptedValue = utils.getDecrptedValue(pwdFromDb);

          if (decryptedValue == password) {
            res.redirect('/instructor-home');
            connection.end();
            return;
          } else {
            message = 'Incorrect Password';
            res.render('login');
            connection.end();
            return;
          }
        }

        // If not found in the instructor table, check the student table
        connection.query(loginQuery.FETCH_USER_BY_USERNAME_STUDENT, [username], (errStudent, rowsStudent) => {
          if (errStudent) {
            res.send(errStudent.stack);
          } else {
            if (rowsStudent.length) {
              const pwdFromDb = rowsStudent[0].password;
              const decryptedValue = utils.getDecrptedValue(pwdFromDb);

              if (decryptedValue == password) {
                res.redirect('/student-home');
                connection.end();
                return;
              } else {
                message = 'Incorrect Password';
                res.render('login');
                connection.end();
                return;
              }
            } else {
              // Username not found in either table
              message = 'Incorrect username';
              res.render('login');
            }
          }
          connection.end();
        });
      }
    });
  } else {
    message = 'Please enter valid credentials';
    res.render('login');
  }
};
