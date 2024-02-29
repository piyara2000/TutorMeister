var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var app = express();

var loginRouter = require("./routes/login_router");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', loginRouter);
app.get('/login', loginRouter);
app.post('/login', loginRouter);

module.exports = app;