var FETCH_USER_BY_USERNAME_INSTRUCTOR =
  "select userid, firstname, lastname, username, email, country, password from tmdb.tutorData t where username = ?";
var FETCH_USER_BY_USERNAME_STUDENT =
  "select userid, firstname, lastname, username, email, country, password from tmdb.studentData t where username = ? ";

module.exports = {
  FETCH_USER_BY_USERNAME_INSTRUCTOR: FETCH_USER_BY_USERNAME_INSTRUCTOR,
  FETCH_USER_BY_USERNAME_STUDENT: FETCH_USER_BY_USERNAME_STUDENT,
};
