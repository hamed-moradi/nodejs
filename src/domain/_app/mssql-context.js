import mssql from 'mssql';
import config from "../../infrastructure/config.js";

const connFig = {
    server: config.connectionString.mssql.server,
    user: config.connectionString.mssql.user,
    password: config.connectionString.mssql.password,
    // port: 1433,
    // domain: ''
    database: config.connectionString.mssql.database,
    // connectionTimeout: 10000,
    // requestTimeout: 10000,
    // stream: false,
    // parseJSON: false,
    // pool: { max: 10, min: 0, fifo: true, idleTimeoutMillis: 10000, acquireTimeoutMillis: 512 }
};

const pool = new mssql.ConnectionPool(connFig);
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