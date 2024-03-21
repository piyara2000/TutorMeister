var GET_COURSE_DETAILS = "SELECT * FROM tmdb.courseData WHERE instructorid = ?";
var GET_STUDENTS_BY_COURSE =
  "SELECT * FROM tmdb.requestData WHERE course_id = ?";
var GET_STUDENT_DATA = "SELECT * from tmdb.studentData WHERE userid = ?";
var UPDATE_REQUEST_DATA =
  "UPDATE tmdb.requestData SET is_enrolled = ? WHERE student_id = ? AND course_id = ?";
var DELETE_REQUEST_DATA = "DELETE FROM tmdb.requestData WHERE request_id = ?";
var GET_STUDENT_EMAIL_AND_COURSE =
  "SELECT DISTINCT sd.email AS email, cd.coursename AS courseName FROM tmdb.requestData rd JOIN tmdb.studentData sd ON rd.student_id = sd.userid JOIN tmdb.courseData cd ON rd.course_id = cd.courseid WHERE rd.student_id = ? AND rd.course_id = ?";

module.exports = {
  GET_COURSE_DETAILS: GET_COURSE_DETAILS,
  GET_STUDENTS_BY_COURSE: GET_STUDENTS_BY_COURSE,
  GET_STUDENT_DATA: GET_STUDENT_DATA,
  UPDATE_REQUEST_DATA: UPDATE_REQUEST_DATA,
  DELETE_REQUEST_DATA: DELETE_REQUEST_DATA,
  GET_STUDENT_EMAIL_AND_COURSE: GET_STUDENT_EMAIL_AND_COURSE,
};
