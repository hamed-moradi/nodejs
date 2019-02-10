import mysql from 'mysql';
import util from 'util';

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '192.168.188.128',
    port: 3306,
    user: 'admin',
    password: '123',
    database: 'dandy_lady'
})

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) {
        connection.release();
    }
    return;
});
pool.query = util.promisify(pool.query);

export default pool;

// const connection = mysql.createConnection({
//     host: '192.168.188.128',
//     port: 3306,
//     user: 'admin',
//     password: '123',
//     database: 'dandy_lady'
// });
// connection.connect((err) => { if (err) throw err; });
//export default connection;