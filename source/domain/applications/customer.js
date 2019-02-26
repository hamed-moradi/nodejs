
let customerApp = {};
const { mssql, pool } = require('../contexts/mssql');

customerApp.getById = async (id) => {
    await pool.connect();
    var request = new mssql.Request(pool);
    var result = await request.query(`select * from customer where id = ${id}`);
    //.input('@Id', mssql.Int, id)
    //.output('StatusCode', mssql.SmallInt)
    //.execute('api_customer_getById');
    pool.close();
    return result.recordset;
};

customerApp.getAll = async () => {
    await pool.connect();
    var request = new mssql.Request(pool);
    var result = await request.query(`select * from customer`);
    pool.close();
    return result.recordset;
};

module.exports = customerApp;