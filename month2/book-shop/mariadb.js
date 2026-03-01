const mariadb = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

let pool = mariadb.createPool({
    host: 'localhost',
    port: '3306',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'bookshop2'
});

module.exports = pool;