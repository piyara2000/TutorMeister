var GET_EXISTING_DATA_INSTRUCTOR =
  "Select userid from tmdb.tutorData where username = ?";
var FETCH_USER_DETAILS_BY_INSTRUCTORID =
  "select userid, firstname, lastname, username, email, country, password from tmdb.tutorData t where userid = ?";
var UPDATE_INSTRUCTOR =
  "UPDATE tmdb.tutorData SET username = ?, email = ?, password = ? WHERE userid = ?";

var GET_EXISTING_DATA_STUDENT =
  "Select userid from tmdb.studentData where username = ?";
var FETCH_USER_DETAILS_BY_STUDENTID =
  "select * from tmdb.studentData t where userid = ?";
var UPDATE_STUDENT =
  "UPDATE tmdb.studentData SET username = ?, email = ?, password = ?, eduLevel = ?, learningStyle = ?, learningPace = ?, isGroup = ?, mode = ?, notes = ? WHERE userid = ?";

module.exports = {
  GET_EXISTING_DATA_INSTRUCTOR: GET_EXISTING_DATA_INSTRUCTOR,
  FETCH_USER_DETAILS_BY_INSTRUCTORID: FETCH_USER_DETAILS_BY_INSTRUCTORID,
  UPDATE_INSTRUCTOR: UPDATE_INSTRUCTOR,
  
  GET_EXISTING_DATA_STUDENT: GET_EXISTING_DATA_STUDENT,
  FETCH_USER_DETAILS_BY_STUDENTID:FETCH_USER_DETAILS_BY_STUDENTID,
  UPDATE_STUDENT:UPDATE_STUDENT,
};
