var GET_EXISTING_DATA_INSTRUCTOR =
    "Select userid from tmdb.tutorData where username = ?";
var FETCH_USER_DETAILS_BY_INSTRUCTORID =
    "select userid, firstname, lastname, username, email, country, password from tmdb.tutorData t where userid = ?";
var UPDATE_INSTRUCTOR =
    "UPDATE tmdb.tutorData SET username = ?, email = ?, password = ? WHERE userid = ?";

// var VALIDATE_USER_EXISTS_STUDENT =
//     "Select userid from tmdb.studentData where username = ?";
// var UPDATE_STUDENT =
//     "insert into tmdb.studentData (firstname, lastname, username, country, email, eduLevel, learningStyle, learningPace, isGroup, mode, notes, password) values (?,?,?,?,?,?,?,?,?,?,?,?)";

module.exports = {
    GET_EXISTING_DATA_INSTRUCTOR: GET_EXISTING_DATA_INSTRUCTOR,
    FETCH_USER_DETAILS_BY_INSTRUCTORID:FETCH_USER_DETAILS_BY_INSTRUCTORID,
    UPDATE_INSTRUCTOR: UPDATE_INSTRUCTOR,
    // VALIDATE_USER_EXISTS_STUDENT: VALIDATE_USER_EXISTS_STUDENT,
    // UPDATE_STUDENT: UPDATE_STUDENT,
};
