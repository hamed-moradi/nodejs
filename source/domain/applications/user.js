
let userApp = {};
let { mssql, pool } = require('../contexts/mssql');
//import problem from '../applications/problem';

userApp.getById = async (id) => {
    var query = `select * from user where id = ${id} limit 1`;
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

module.exports = userApp;
