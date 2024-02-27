var cryptoJS = require("crypto-js");
var configData = require("./config.js");
var dayjs = require("dayjs");

exports.getDecrptedValue = (inputVal) => {
  var inputValBytes = cryptoJS.AES.decrypt(inputVal, "$ecretKey");
  var decryptedInputVal = inputValBytes.toString(cryptoJS.enc.Utf8);
  return decryptedInputVal;
};
exports.getEncrptedValue = (inputVal) => {
  var encryptedInputVal = cryptoJS.AES.encrypt(
    inputVal,
    "$ecretKey"
  ).toString();
  return encryptedInputVal;
};
exports.getConfigByConfigName = (configName) => {
  try {
    let localConfig = configData.getLocalConfigData();
    var localConfigValue = JSON.stringify(localConfig[configName]);
    if (
      localConfigValue != null &&
      localConfigValue != undefined &&
      localConfigValue != ""
    ) {
      //Data is present in local config
      return JSON.parse(localConfigValue);
    } else {
      let globalConfig = configData.getGlobalConfigData();
      var globalConfigValue = JSON.stringify(globalConfig[configName]);
      if (
        globalConfigValue != null &&
        globalConfigValue != undefined &&
        globalConfigValue != ""
      ) {
        return JSON.parse(globalConfigValue);
      } else {
        return null;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getSenderEmail = (req, res) => {
  var sender_email = this.getConfigByConfigName("SENDER-MAIL");
  var senderMail = "";
  if ((sender_email == null && sender_email == "") || sender_email.length == 0) {
    var errorMsg =
      "Error while fetching sender email information,Please contact administrator " + sender_email;
    // res.render('500', { errorMessage: errorMsg });    
    return senderMail;
  } else {
    for (var i = 0; i < sender_email.length; i++) {
      if ("devops" == Object.values(sender_email[i])[0]) {
        senderMail = Object.values(sender_email[i])[1];
      }
    }
    return senderMail;
  }
};

exports.getTempPassword = (req, res) => {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var tempPassword = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    tempPassword += chars.substring(randomNumber, randomNumber + 1);
  }
  return tempPassword;
}

exports.getAWSSDKRegion = () => {
  var awsSdk = this.getConfigByConfigName("AWS-SDK");
  for (var i = 0; i < awsSdk.length; i++) {
    if ("region" == Object.values(awsSdk[i])[0]) {
      return Object.values(awsSdk[i])[1];
    }
  }
};
exports.getAWSSDKAPIVersion = () => {
  var awsSdk = this.getConfigByConfigName("AWS-SDK");
  for (var i = 0; i < awsSdk.length; i++) {
    if ("apiVersion" == Object.values(awsSdk[i])[0]) {
      return Object.values(awsSdk[i])[0];
    }
  }
};

exports.formatDateTime = (date) => {
  return dayjs(date).format("YYYY-MM-DD hh:mm:ss A");
};

exports.getDateDifferenceInMinutes = (date1, date2) => {
  // let timediff = dayjs.duration(dayjs(date1).diff(dayjs(date2))).minutes();
  let timediff = dayjs(date2).diff(dayjs(date1), "minute");
  return timediff;
};

exports.checkUserSessionAlive = (req, res) => {
  if (req.session == null || req.session.user == null) {
    return false;
  } else {
    return true;
  }
};

exports.convertUnixTimeStampToDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000; // 1575909015000

  const dateObject = new Date(unixTimestamp);

  const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15

  return humanDateFormat;
};