
let customerApp = {};
let { mssql, pool } = require('../contexts/mssql');
//import problem from '../applications/problem';

customerApp.getById = async (id) => {
    await pool;
    try {
        const request = pool.request();// new mssql.Request(connectionPool);
        var result = request.query(`select * from customer where id = ${id}`);
            //.input('@Id', mssql.Int, id)
            //.output('StatusCode', mssql.SmallInt)
            //.execute('api_customer_getById');
            
        return result;
    }
    catch (err) {
        //problem.insert(err);
        throw err;
    }
};

customerApp.getAll = async () => {
    const pool = await mssql;
    var result = await pool.request()
        .query(`select * from customer`);
    return result.recordset;
};

module.exports = customerApp;