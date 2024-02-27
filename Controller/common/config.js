const fs = require('fs');
let globalConfigData = fs.readFileSync('./config/global.JSON');
let localConfigData = fs.readFileSync('./config/local.JSON');

exports.getLocalConfigData = () => {
    return JSON.parse(localConfigData);
}

exports.getGlobalConfigData = () => {
    return JSON.parse(globalConfigData);
}