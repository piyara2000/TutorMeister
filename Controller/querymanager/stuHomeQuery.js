var GET_STUDENT_LEARNING_STYLE =
  "SELECT learningStyle FROM tmdb.studentData WHERE userid = ?";
var GET_STUDENT_COURSES =
  "SELECT DISTINCT c.courseid, c.coursename, c.level, c.insfname, c.inslname FROM courseData c LEFT JOIN requestData r ON c.courseid = r.course_id WHERE (r.student_id IS NULL OR (r.student_id = ? AND r.is_enrolled = 0)) AND c.teachingstyle = ?";
var GET_INSTRUCTOR_DATA =
  "select userid, firstname, lastname, username, email, country, password from tmdb.tutorData t where userid = ?";
var GET_ENROLLED_COURSES =
  "Select * from tmdb.requestData where is_enrolled = 1 and student_id = ?";
var GET_STUDENT_COURSES_BY_COURSEID =
  "SELECT * FROM tmdb.courseData WHERE courseid = ?";

module.exports = {
  GET_STUDENT_LEARNING_STYLE: GET_STUDENT_LEARNING_STYLE,
  GET_STUDENT_COURSES: GET_STUDENT_COURSES,
  GET_INSTRUCTOR_DATA: GET_INSTRUCTOR_DATA,
  GET_ENROLLED_COURSES: GET_ENROLLED_COURSES,
  GET_STUDENT_COURSES_BY_COURSEID: GET_STUDENT_COURSES_BY_COURSEID,
};
