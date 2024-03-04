var FETCH_USER_BY_USERNAME_INSTRUCTOR = "select userid, firstname, lastname, username, email, country, password from tmdb.tutordata t where email = ?";
var FETCH_USER_BY_USERNAME_STUDENT = "select userid, firstname, lastname, username, email, country, password from tmdb.studentdata t where email = ? ";

module.exports = {
    FETCH_USER_BY_USERNAME_INSTRUCTOR: FETCH_USER_BY_USERNAME_INSTRUCTOR,
    FETCH_USER_BY_USERNAME_STUDENT: FETCH_USER_BY_USERNAME_STUDENT
}