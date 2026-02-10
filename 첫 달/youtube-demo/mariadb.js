const mysql = require('mysql2');
const env = require('./env');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Youtube',
    password: env.password,
    dateStrings: true
});

module.exports = connection;