const mariadb = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const conn = mariadb.createConnection({
    host: 'localhost',
    port: '3306',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'bookshop'
});

module.exports = conn;