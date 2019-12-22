
let userApp = {};
import context from '../contexts/mssql.js';
//import problem from '../applications/problem';

userApp.getById = async (id) => {
    var query = `select * from user where id = ${id} limit 1`;
    var result = await context.mssql.query(query);
    return result;
};

userApp.getAll = async () => {
    await context.pool.connect();
    var request = new context.mssql.Request(context.pool);
    var result = await request.query(`select * from dbo.[user]`);
    context.pool.close();
    return result.recordset;
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
