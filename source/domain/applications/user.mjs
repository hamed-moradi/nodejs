//#region definations
let userApp = {};
import mssql from '../contexts/mssql';
//import problem from '../applications/problem';
//#endregion

userApp.getById = async (_id) => {
    var query = 'select * from user where id = ' + _id + ' limit 1';
    var result = await mssql.query(query);
    return result;
};

userApp.getAll = async () => {
    var result = await mssql.query('select * from user');
    return result;
};

userApp.update = async (model) => {
    await userModel.findByIdAndUpdate(model.id, (err, user) => {
        if (err) throw err;
    });
    return model;
};

userApp.insert = async (model) => {
    var result;
    await userModel.add(model, (err, user) => {
        result = user;
    });
    return result;
};

export default userApp;
