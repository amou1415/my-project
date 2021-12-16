// 连接数据库
const mysql = require('mysql');

// 创建连接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '02010898lxh',
    port: '3306',
    database: 'tt'
});
connection.connect();