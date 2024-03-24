var SEND_FEEDBACK = "INSERT INTO tmdb.rateStudentData (instructor_id, student_id, course_id, rating_num, stu_review) VALUES (?, ?, ?, ?, ?);";
var GET_STUDENT_RATINGS = "SELECT * FROM tmdb.rateStudentData WHERE course_id = ? AND rating_num IS NOT NULL;";
var GET_ALL_DETAILS  = "SELECT c.*, r.* FROM tmdb.courseData c JOIN tmdb.rateStudentData r ON c.courseid = r.course_id WHERE c.courseid = ? AND r.rating_num IS NOT NULL;"
var ADD_SCHEDULE_REQUEST = "INSERT INTO tmdb.schedulingData (course_id, student_id,scheduled_date,scheduled_time) VALUES (?, ?, ?, ?)";
const UPDATE_SCHEDULE_REQUEST = "UPDATE tmdb.schedulingData SET scheduled_date = ?, scheduled_time = ? WHERE course_id = ? AND student_id = ?";

module.exports = {
    SEND_FEEDBACK: SEND_FEEDBACK,
    GET_STUDENT_RATINGS: GET_STUDENT_RATINGS,
    GET_ALL_DETAILS: GET_ALL_DETAILS,
    ADD_SCHEDULE_REQUEST : ADD_SCHEDULE_REQUEST,
    UPDATE_SCHEDULE_REQUEST: UPDATE_SCHEDULE_REQUEST


};