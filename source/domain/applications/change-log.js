//#region definations
let changeLogApp;
let changeLogModel = require('../models/change-log');
let problemApp = require('../applications/problem');
//#endregion

changeLogApp.insert = async (model) => {
    await changeLogModel.insert(model, (err) => {
        if (err) {
            problemApp.insert(err);
            throw err;
        };
    });
}

module.require = changeLogApp;