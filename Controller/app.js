var express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
var app = express();
const session = require("express-session");

var loginRouter = require("./routes/login_router");
var signupRouter = require("./routes/signup_router");
var createCourseRouter = require("./routes/create_course_router");
var insHomeRouter = require("./routes/ins_home_router");
var insViewCourseRouter = require("./routes/ins_view_course_router");
var accountEditRouter = require("./routes/account_edit_router");
var stuHomeRouter = require("./routes/stu_home_router");
var insStudentViewRouter = require("./routes/ins_student_view_router");
var studentMyCourseRouter = require("./routes/studentMyCourse_router");
var existingStudentCourseRouter = require("./routes/existing_student_course_router");
var stuCourseHomeRouter = require("./routes/stu_course_home_router");
var acceptStudentRouter = require("./routes/accept_student_router");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 },
  })
);

app.use((req, res, next) => {
  // Helper function to determine active status
  res.locals.active = (path) => (req.path === path ? "active" : "");
  next();
});

app.use((req, res, next) => {
  const isLoginPage = req.path === "/login";
  const isLoginPage2 = req.path === "/";
  const isInstructorSignupPage = req.path === "/instructor-register";
  const isStudentSignupPage = req.path === "/student-register";
  

  const isLoggedIn = req.session && req.session.instructorId;

  if (
    (isLoginPage ||
      isLoginPage2 ||
      isInstructorSignupPage ||
      isStudentSignupPage) &&
    isLoggedIn
  ) {
    // Destroy the session only if the user is already logged in and accessing /login, /instructor-register, or /student-register
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      }
      // Redirect to the respective page after destroying the session
      if (isLoginPage) {
        res.redirect("/login");
      } else if (isInstructorSignupPage) {
        res.redirect("/instructor-register");
      } else {
        res.redirect("/student-register");
      }
    });
  } else {
    // Continue to the next middleware or route handler
    next();
  }
});

app.get("/", loginRouter);
app.post("/", loginRouter);

app.get("/health", loginRouter);

app.get("/login", loginRouter);
app.post("/login", loginRouter);

app.get("/logout", loginRouter);

app.get("/instructor-register", signupRouter);
app.post("/instructor-register", signupRouter);

app.get("/student-register", signupRouter);
app.post("/student-register", signupRouter);

app.get("/create-course", createCourseRouter);
app.post("/create-course", createCourseRouter);

app.get("/instructor-home", insHomeRouter);
app.post("/instructor-home", insHomeRouter);

app.get("/instructor-account-edit", accountEditRouter);
app.post("/instructor-account-edit", accountEditRouter);

app.get("/student-account-edit", accountEditRouter);
app.post("/student-account-edit", accountEditRouter);

app.get("/viewCourse", insViewCourseRouter);

app.get("/student-home", stuHomeRouter);
app.post("/student-home", stuHomeRouter);

app.get("/studentMyCourse", studentMyCourseRouter);
app.post("/studentMyCourse",studentMyCourseRouter);

app.get("/existingStudentCourse", existingStudentCourseRouter);
app.post("/existingStudentCourse",existingStudentCourseRouter);

app.get("/instructor-student-view", insStudentViewRouter);
app.post("/instructor-student-view", insStudentViewRouter);

app.get("/student-course-home", stuCourseHomeRouter);
app.post("/student-course-home", stuCourseHomeRouter);

app.get("/acceptStudent", acceptStudentRouter);
app.post("/acceptStudent", acceptStudentRouter);
app.post("/rejectStudent", acceptStudentRouter);

module.exports = app;
