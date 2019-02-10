import mssql from 'mssql';

const config = {
    user: 'sa',
    password: 'S@lserver',
    server: '192.168.188.128',
    port: 1433,
    //domain
    database: 'DandyLady',
    connectionTimeout: 10000,
    requestTimeout: 10000,
    //stream: false,
    //parseJSON: false,
    pool: {
        max: 10,
        min: 0,
        //acquireTimeoutMillis: 512,
        fifo: true,
        idleTimeoutMillis: 10000
    }
};

const connectionPool = new mssql.ConnectionPool(config).connect();
// .then(pool => { return pool })
// .catch(err => { throw err; });
//connectionPool.on('error', err => { throw err; });

export default { mssql, connectionPool };