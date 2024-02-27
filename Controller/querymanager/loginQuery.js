var FETCH_USER_BY_USERNAME = "select username from tmdb.tutordata t where username = ? or email = ? AND password = ?";

module.exports = {
    FETCH_USER_BY_USERNAME: FETCH_USER_BY_USERNAME
}