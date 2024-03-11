var GET_COURSE_DETAILS = "SELECT * FROM tmdb.courseData WHERE instructorid = ?";
var GET_STUDENTS_BY_COURSE = "SELECT * FROM tmdb.requestData WHERE course_id = ?";
var GET_STUDENT_DATA =
  "SELECT * from tmdb.studentData WHERE userid = ?";

module.exports = {
    GET_COURSE_DETAILS: GET_COURSE_DETAILS,
    GET_STUDENTS_BY_COURSE: GET_STUDENTS_BY_COURSE,
    GET_STUDENT_DATA: GET_STUDENT_DATA,
};