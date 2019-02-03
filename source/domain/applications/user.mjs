//#region definations
let userApp = {};
import userModel from '../models/user';
//#endregion

userApp.getById = async (_id) => {
    var result;
    await userModel.findById(_id, function (err, user) {
        if (err) throw err;
        result = user
    });
    return result;
};

userApp.getAll = async () => {
    var result;
    await userModel.find((err, users) => {
        if (err) throw err;
        result = users;
    });
    return result;
};

export default userApp;
