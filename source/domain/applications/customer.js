
let customerApp = {};
import context from '../contexts/mssql.js';

customerApp.getById = async (id) => {
    await context.pool.connect();
    var request = new context.mssql.Request(context.pool);
    var result = await request.query(`select * from customer where id = ${id}`);
    //.input('@Id', mssql.Int, id)
    //.output('StatusCode', mssql.SmallInt)
    //.execute('api_customer_getById');
    context.pool.close();
    return result.recordset;
};

customerApp.getAll = async () => {
    await context.pool.connect();
    var request = new context.mssql.Request(context.pool);
    var result = await request.query(`select * from customer`);
    context.pool.close();
    return result.recordset;
};

export default customerApp;