//#region definations
let customerApp = {};
import { mssql, pool } from '../contexts/mssql';
//import problem from '../applications/problem';
//#endregion

customerApp.getById = async (id) => {
    await mssql;
    try {
        const request = new mssql.Request(pool);
        var result = request
            //.input('@Id', mssql.Int, id)
            //.output('StatusCode', mssql.SmallInt)
            //.execute('api_customer_getById');
            .query(`select * from customer where id = ${id}`);
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

export default customerApp;