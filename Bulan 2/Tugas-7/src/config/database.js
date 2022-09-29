import mysql from "mysql"

export const connectionPool = mysql.createPool({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'db_mahasiswa'
});

// connectionPool.getConnection((err) => {
//     if (err) throw err;
//     console.log('terhubung ke mysql server')
// });