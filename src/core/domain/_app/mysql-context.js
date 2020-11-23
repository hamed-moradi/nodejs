
import mysql from 'mysql';

var config = {
    //connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'biavoo'
};

let pool = mysql.createPool(config);

//var conn = mysql.createConnection(config);
//let query = async (qry) => {
//    conn.connect();
//    conn.query(qry, (error, results, fields) => {
//        if(error) {
//            console.error(error);
//            throw error;
//        }
//        return results;
//    })
//    conn.end();
//}

let query = async (qry) => {
    pool.getConnection(function(err, connection) {
        if(err) throw err; // not connected!
        connection.query(qry, function(error, results, fields) {
            connection.release();

            if(error) throw error;

            // Don't use the connection here, it has been returned to the pool.
            return results;
        });
    });
    //pool.query('qry', function(error, results, fields) {
    //    if(error) {
    //        console.error(error);
    //        throw error;
    //    }
    //    return results;
    //});
}

export default query;