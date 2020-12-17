import mssql from 'mssql';
import appSetting from "../../../app-settings.js";

const config = {
    server: appSetting.connectionString.msSql.server,
    user: appSetting.connectionString.msSql.user,
    password: appSetting.connectionString.msSql.password,
    // port: 1433,
    // domain: ''
    database: appSetting.connectionString.msSql.database,
    // connectionTimeout: 10000,
    // requestTimeout: 10000,
    // stream: false,
    // parseJSON: false,
    // pool: { max: 10, min: 0, fifo: true, idleTimeoutMillis: 10000, acquireTimeoutMillis: 512 }
};

const pool = new mssql.ConnectionPool(config);
const poolConnect = pool.connect();
//pool.close();

pool.on('error', err => {
    //ELOGIN(ConnectionError) - Login failed.
    //ETIMEOUT(ConnectionError) - Connection timeout.
    //EALREADYCONNECTED(ConnectionError) - Database is already connected!
    //EALREADYCONNECTING(ConnectionError) - Already connecting to database!
    //EINSTLOOKUP(ConnectionError) - Instance lookup failed.
    //ESOCKET(ConnectionError) - Socket error.
    console.error(err);
    throw err;
});

export default { mssql, pool };