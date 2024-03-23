var GET_COURSE_DETAILS = "SELECT * FROM tmdb.courseData WHERE instructorid = ?";
var GET_STUDENTS_BY_COURSE =
  "SELECT * FROM tmdb.requestData WHERE course_id = ?";
var GET_STUDENT_DATA = "SELECT * from tmdb.studentData WHERE userid = ?";
var UPDATE_REQUEST_DATA =
  "UPDATE tmdb.requestData SET is_enrolled = ? WHERE student_id = ? AND course_id = ?";
var DELETE_REQUEST_DATA = "DELETE FROM tmdb.requestData WHERE request_id = ?";
var GET_STUDENT_EMAIL_AND_COURSE =
  "SELECT DISTINCT sd.email AS email, cd.coursename AS courseName FROM tmdb.requestData rd JOIN tmdb.studentData sd ON rd.student_id = sd.userid JOIN tmdb.courseData cd ON rd.course_id = cd.courseid WHERE rd.student_id = ? AND rd.course_id = ?";

var GET_RATING_NUM = "SELECT * FROM tmdb.rateInstructorData WHERE student_id = ? AND rating_num IS NOT NULL;";
var GET_ALL_DETAILS  = "SELECT s.*, r.* FROM tmdb.studentData s JOIN tmdb.rateInstructorData r ON s.userid= r.student_id WHERE s.userid = ? AND r.rating_num IS NOT NULL;"



const GET_PAGE = "SELECT is_enrolled FROM tmdb.requestData WHERE student_id = ? AND course_id = ?";


module.exports = {
  GET_COURSE_DETAILS: GET_COURSE_DETAILS,
  GET_STUDENTS_BY_COURSE: GET_STUDENTS_BY_COURSE,
  GET_STUDENT_DATA: GET_STUDENT_DATA,
  GET_RATING_NUM:GET_RATING_NUM,
  UPDATE_REQUEST_DATA: UPDATE_REQUEST_DATA,
  DELETE_REQUEST_DATA: DELETE_REQUEST_DATA,
  GET_STUDENT_EMAIL_AND_COURSE: GET_STUDENT_EMAIL_AND_COURSE,
  GET_ALL_DETAILS: GET_ALL_DETAILS,
  GET_PAGE:GET_PAGE,
};
