//#region definations
let changeLogApp;
import changeLogModel from '../models/change-log.js';
import problemApp from '../applications/problem.js';
//#endregion

changeLogApp.insert = async (model) => {
    await changeLogModel.insert(model, (err) => {
        if (err) {
            problemApp.insert(err);
            throw err;
        };
    });
}

export default changeLogApp;