let context = {};
import mssql from 'mssql';
context.mssql = mssql;

const config = {
    server: '127.0.0.1',
    user: 'sa', password: '123', // port: 1433, domain: ''
    database: 'biavoo',// connectionTimeout: 10000, requestTimeout: 10000, stream: false, parseJSON: false,
    //pool: { max: 10, min: 0, fifo: true, idleTimeoutMillis: 10000, acquireTimeoutMillis: 512 }
};

context.pool = new mssql.ConnectionPool(config)
// .then(pool => { return pool })
// .catch(err => { throw err; });

export default context;