var VALIDATE_USER_EXISTS =
  "Select userid from tmdb.tutordata where username = ?";
var ADD_INSTRUCTOR =
  "insert into tmdb.tutordata (firstname, lastname, username, country, email, password) values (?,?,?,?,?,?)";
var VALIDATE_USER_EXISTS_STUDENT =
  "Select userid from tmdb.studentdata where username = ?";
var ADD_STUDENT =
  "insert into tmdb.studentdata (firstname, lastname, username, country, email, eduLevel, learningStyle, isGroup, mode, notes, password, learningPace) values (?,?,?,?,?,?,?,?,?,?,?,?)";

module.exports = {
  VALIDATE_USER_EXISTS: VALIDATE_USER_EXISTS,
  ADD_INSTRUCTOR: ADD_INSTRUCTOR,
  VALIDATE_USER_EXISTS_STUDENT: VALIDATE_USER_EXISTS_STUDENT,
  ADD_STUDENT: ADD_STUDENT,
};
