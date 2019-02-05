//#region definations
let changeLogApp;
import changeLogModel from '../models/change-log';
//#endregion

changeLogApp.insert = async (model) => {
    await changeLogModel.insert(model, (err) => {
        if (err) throw err;
    });
}

export default changeLogApp;