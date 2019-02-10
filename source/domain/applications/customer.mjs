//#region definations
let customerApp = {};
import mssql from '../contexts/mssql';
//#endregion

customerApp.getById = async (id) => {
    var result;
    await mssql.query(`select * from customer where id = ${id}`, (err, test) => {
        if (err) {
            throw err;
        };
        result = test;
    });
    return result;
};

customerApp.getAll = async () => {
    var result = await mssql.request().query('select * from customer');
    return result;
};

export default customerApp;