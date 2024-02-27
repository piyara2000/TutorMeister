// auth.js
const db = require("../common/database");
const loginQuery = require("../querymanager/loginQuery");
var utils = require('../common/utils');

exports.health = (req, res) => {
  res.render('health');
}

