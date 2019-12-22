
import context from '../contexts/mssql.js';

let getById = async (id) => {
    await context.pool.connect();
    var request = new context.mssql.Request(context.pool);
    var result = await request.query(`select * from customer where id = ${id}`);
    //.input('@Id', mssql.Int, id)
    //.output('StatusCode', mssql.SmallInt)
    //.execute('api_customer_getById');
    context.pool.close();
    return result.recordset;
};

let getAll = async () => {
    await context.pool.connect();
    var request = new context.mssql.Request(context.pool);
    var result = await request.query(`select * from dbo.[customer]`);
    context.pool.close();
    return result.recordset;
};

export default { getById, getAll };