//#region definations
let problemApp;
import problemModel from '../models/problem';
//#endregion

problemApp.insert = async (model) => {
    problemModel.insert(model);
};

export default problemApp;