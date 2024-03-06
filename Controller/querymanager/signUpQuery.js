var VALIDATE_USER_EXISTS =
  "Select userid from tmdb.tutorData where username = ?";
var ADD_INSTRUCTOR =
  "insert into tmdb.tutorData (firstname, lastname, username, country, email, password) values (?,?,?,?,?,?)";
var VALIDATE_USER_EXISTS_STUDENT =
  "Select userid from tmdb.studentData where username = ?";
var ADD_STUDENT =
  "insert into tmdb.studentData (firstname, lastname, username, country, email, eduLevel, learningStyle, learningPace, isGroup, mode, notes, password) values (?,?,?,?,?,?,?,?,?,?,?,?)";

module.exports = {
  VALIDATE_USER_EXISTS: VALIDATE_USER_EXISTS,
  ADD_INSTRUCTOR: ADD_INSTRUCTOR,
  VALIDATE_USER_EXISTS_STUDENT: VALIDATE_USER_EXISTS_STUDENT,
  ADD_STUDENT: ADD_STUDENT,
};
