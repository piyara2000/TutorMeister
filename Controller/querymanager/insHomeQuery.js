var GET_COURSE_DATA =
  "SELECT courseid, coursename,`level`  from tmdb.courseData WHERE instructorid = ?";
var GET_COURSE_DETAILS = "SELECT * FROM tmdb.courseData WHERE courseid = ?";

module.exports = {
  GET_COURSE_DATA: GET_COURSE_DATA,
  GET_COURSE_DETAILS: GET_COURSE_DETAILS,
};
