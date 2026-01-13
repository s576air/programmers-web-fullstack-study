const mariadb = require('mysql');

const conn = mariadb.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '1748', // 의미없는 숫자라 노출해도 됨
        database: 'Tennis'
    }
);

module.exports = conn;