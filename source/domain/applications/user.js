
import context from '../contexts/mssql.js';
//import problem from '../applications/problem';

let getById = async (id) => {
    await context.pool.connect();
    var request = new context.mssql.Request(context.pool);
    var result = await request.query(`select * from user where id = ${id} limit 1`);
    context.pool.close();
    return result.recordset;
};

let getAll = async () => {
    await context.pool.connect();
    var request = new context.mssql.Request(context.pool);
    var result = await request.query(`select * from dbo.[user]`);
    context.pool.close();
    return result.recordset;
};

let update = async (model) => {
    await userModel.findByIdAndUpdate(model.id, (err, user) => {
        if (err) throw err;
    });
    return model;
};

let insert = async (model) => {
    var result;
    await userModel.add(model, (err, user) => {
        result = user;
    });
    return result;
};

export default { getById, getAll, update, insert};