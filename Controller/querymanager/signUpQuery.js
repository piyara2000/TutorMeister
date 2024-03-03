var VALIDATE_USER_EXISTS =  "Select userid from tmdb.tutordata where username = ?";
var ADD_INSTRUCTOR = "insert into tmdb.tutordata (firstname, lastname, username, country, email, password) values (?,?,?,?,?,?)";

module.exports = {
    VALIDATE_USER_EXISTS: VALIDATE_USER_EXISTS,
    ADD_INSTRUCTOR: ADD_INSTRUCTOR,
}