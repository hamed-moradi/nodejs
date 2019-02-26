const mssql = require('mssql');

const config = {
    server: '192.168.188.128',
    user: 'sa', password: 'S@lserver', // port: 1433, domain: ''
    database: 'DandyLady',// connectionTimeout: 10000, requestTimeout: 10000, stream: false, parseJSON: false,
    //pool: { max: 10, min: 0, fifo: true, idleTimeoutMillis: 10000, acquireTimeoutMillis: 512 }
};

const pool = new mssql.ConnectionPool(config);
// .then(pool => { return pool })
// .catch(err => { throw err; });

module.exports = { mssql, pool };