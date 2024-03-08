var express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
var app = express();
const session = require("express-session");

var loginRouter = require("./routes/login_router");
var signupRouter = require("./routes/signup_router");
var createCourseRouter = require("./routes/create_course_router");

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
    cookie: { secure: false },
  })
);

app.get("/health", loginRouter);
app.get("/login", loginRouter);
app.post("/login", loginRouter);

app.get("/instructor-register", signupRouter);
app.post("/instructor-register", signupRouter);

app.get("/student-register", signupRouter);
app.post("/student-register", signupRouter);

app.get("/create-course", createCourseRouter);
app.post("/create-course", createCourseRouter);

module.exports = app;
