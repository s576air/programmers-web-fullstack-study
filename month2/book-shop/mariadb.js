const mariadb = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

/** @type {mariadb.Connection} */
let conn;

mariadb.createConnection({
    host: 'localhost',
    port: '3306',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'bookshop2'
}).then((results) => {
    conn = results;
});

module.exports = conn;