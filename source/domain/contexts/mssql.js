import mssql from 'mssql';

const config = {
    server: '127.0.0.1',
    user: 'sa', password: '123', // port: 1433, domain: ''
    database: 'biavoo',// connectionTimeout: 10000, requestTimeout: 10000, stream: false, parseJSON: false,
    //pool: { max: 10, min: 0, fifo: true, idleTimeoutMillis: 10000, acquireTimeoutMillis: 512 }
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

let query = async (qry, props) => {
    await poolConnect;
    try {
        const request = pool.request();
        if(props != null && props != undefined)
            props.forEach(prop => {
                switch(prop) {
                    case 'in':
                        request.input(prop.name, prop.type, prop.value);
                        break;
                    case 'out':
                        request.output(prop.name, prop.type);
                        break;
                }
            });
        var result = request.query(qry);
        //recordset(columns) - Dispatched when metadata for new recordset are parsed.
        //row(row) - Dispatched when new row is parsed.
        //done(returnValue) - Dispatched when request is complete.
        //error(err) - Dispatched on error.
        //info(message) - Dispatched on informational message.
        return result;
    }
    catch(err) {
        //ETIMEOUT(RequestError) - Request timeout.
        //EREQUEST(RequestError) - Message from SQL Server
        //ECANCEL(RequestError) - Cancelled.
        //ENOCONN(RequestError) - No connection is specified for that request.
        //ENOTOPEN(ConnectionError) - Connection not yet open.
        //ECONNCLOSED(ConnectionError) - Connection is closed.
        //ENOTBEGUN(TransactionError) - Transaction has not begun.
        //EABORT(TransactionError) - Transaction was aborted(by user or because of an error).
        console.error(err);
        throw err;
    }
};

let exec = async (sp, props) => {
    await poolConnect;
    try {
        const request = pool.request();
        if(props != null && props != undefined)
            props.forEach(prop => {
                switch(prop) {
                    case 'in':
                        request.input(prop.name, prop.type, prop.value);
                        break;
                    case 'out':
                        request.output(prop.name, prop.type);
                        break;
                }
            });
        request.execute(sp, (err, result) => {
            if(err != null) {
                //EREQUEST(RequestError) - Message from SQL Server
                //ECANCEL(RequestError) - Cancelled.
                //ETIMEOUT(RequestError) - Request timeout.
                //ENOCONN(RequestError) - No connection is specified for that request.
                //ENOTOPEN(ConnectionError) - Connection not yet open.
                //ECONNCLOSED(ConnectionError) - Connection is closed.
                //ENOTBEGUN(TransactionError) - Transaction has not begun.
                //EABORT(TransactionError) - Transaction was aborted(by user or because of an error).
                console.error(err);
                throw err;
            }
            else {
                return result;
            }
        });
    }
    catch(err) {
        console.error(err);
        throw err;
    }
}

let batch = async () => {
    throw 'no implementation exception';
};

let bulk = async () => {
    throw 'no implementation exception';
};

export default { mssql, pool, query, exec, batch, bulk };