const mysql = require('mysql');

const conn = mysql.createConnection({
    host     : 'localhost',
    port: '3312',
    user     : 'root',
    password: 'root',
    database: 'mydb',
});

conn.connect();

module.exports = conn;
