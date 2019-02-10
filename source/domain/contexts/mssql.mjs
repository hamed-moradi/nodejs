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

var connection = mssql.connect(config, (err) => {
    if (err) { throw err; };
});

export default connection;