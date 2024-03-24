var GET_COURSE_DETAILS = "SELECT DISTINCT * FROM tmdb.courseData WHERE instructorid = ?";

const GET_SCHEDULED_MEETINGS = `
    SELECT 
        CONCAT(tmdb.studentData.firstname, ' ', tmdb.studentData.lastname) AS student_name,
        studentDetails.eduLevel, 
        studentDetails.learningStyle,
        tmdb.schedulingData.course_id,
        tmdb.schedulingData.scheduled_date,
        tmdb.schedulingData.scheduled_time,
        tmdb.schedulingData.schedule_id,
        tmdb.schedulingData.student_id
    FROM
    tmdb.schedulingData
    JOIN
    tmdb.studentData ON tmdb.schedulingData.student_id = tmdb.studentData.userid
    LEFT JOIN
    tmdb.studentData AS studentDetails ON tmdb.schedulingData.student_id = studentDetails.userid
    WHERE
    tmdb.schedulingData.course_id = ?`;
var GET_STUDENT_EMAIL_AND_COURSE =
  "SELECT DISTINCT sd.email AS email, cd.coursename AS courseName FROM tmdb.requestData rd JOIN tmdb.studentData sd ON rd.student_id = sd.userid JOIN tmdb.courseData cd ON rd.course_id = cd.courseid WHERE rd.student_id = ? AND rd.course_id = ?";
 var GET_SCHEDULED_DETAILS="SELECT  * FROM tmdb.schedulingData WHERE  schedule_id = ? ";
var DELETE_SCHEDULING_DATA =
"DELETE FROM tmdb.schedulingData WHERE schedule_id = ? ";

module.exports = {
  GET_SCHEDULED_MEETINGS: GET_SCHEDULED_MEETINGS,
  GET_STUDENT_EMAIL_AND_COURSE:GET_STUDENT_EMAIL_AND_COURSE,
  DELETE_SCHEDULING_DATA:DELETE_SCHEDULING_DATA,
  GET_COURSE_DETAILS: GET_COURSE_DETAILS,
  GET_SCHEDULED_DETAILS:GET_SCHEDULED_DETAILS
};
