var GET_COURSE_DETAILS = "SELECT * FROM tmdb.courseData WHERE instructorid = ?";
var GET_STUDENTS_BY_COURSE =
  "SELECT * FROM tmdb.requestData WHERE course_id = ?";
var GET_STUDENT_DATA = "SELECT * from tmdb.studentData WHERE userid = ?";
var UPDATE_REQUEST_DATA =
  "UPDATE tmdb.requestData SET is_enrolled = ? WHERE student_id = ? AND course_id = ?";
var DELETE_REQUEST_DATA =
  "DELETE FROM tmdb.requestData WHERE request_id = ?";

module.exports = {
  GET_COURSE_DETAILS: GET_COURSE_DETAILS,
  GET_STUDENTS_BY_COURSE: GET_STUDENTS_BY_COURSE,
  GET_STUDENT_DATA: GET_STUDENT_DATA,
  UPDATE_REQUEST_DATA: UPDATE_REQUEST_DATA,
  DELETE_REQUEST_DATA: DELETE_REQUEST_DATA,
};
