const mariadb = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const conn = mariadb = mariadb.createConnection({
    host: '127.0.0.1',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'bookshop',
    dataStrings: true
});

module.exports = conn;