var GET_STUDENT_LEARNING_STYLE = "SELECT learningStyle FROM tmdb.studentData WHERE userid = ?";
var GET_STUDENT_COURSES = "SELECT * FROM tmdb.courseData WHERE teachingstyle = ?";
var GET_INSTRUCTOR_DATA = "select userid, firstname, lastname, username, email, country, password from tmdb.tutorData t where userid = ?";

module.exports = {
    GET_STUDENT_LEARNING_STYLE: GET_STUDENT_LEARNING_STYLE,
    GET_STUDENT_COURSES: GET_STUDENT_COURSES,
    GET_INSTRUCTOR_DATA: GET_INSTRUCTOR_DATA,
}