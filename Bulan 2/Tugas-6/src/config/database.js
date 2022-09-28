import mysql from "mysql"

export const connectionPool = mysql.createPool({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'db_mhs'
});
// connectionPool.connect((err) => {
//     if (err) throw err;
//     console.log('terhubung ke mysql server')
// });