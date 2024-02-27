var createError = require("http-errors");
var path = require("path");
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var session = require('express-session');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const PORT = process.env.PORT || 5000;

const login = require("./backend/ins_login_controller");
const insHomeHandler = require("./backend/ins_home_controller");

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "TutorMeister",
  password: "TutorMeister",
  database: "tmdb",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const usersData = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
  { id: 3, name: "User3" },
];

app.get("/", (req, res) => {
  res.send("Starting");
});

app.get("/health", (req, res) => {
  res.send("All good squishy!");
});

app.get("/instructor-home", (req, res) => {
  // Execute the logic from insLogin.js
  insHomeHandler(req, res);
});

app.post("/instructor-login", (req, res) => {
  const { usernameOrEmail, password } = req.body;

  login.authenticateUser(usernameOrEmail, password, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.success) {
        // Redirect to a new page upon successful login
        res.redirect("/instructor-home");
      } else {
        res.status(401).send(result.message);
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
