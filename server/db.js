// 引入mysql 模块
const mysql=require('mysql');

exports.mysql_base = (sql, data, callback) => {

    // 创建数据库连接
    var conn = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '02010898lxh',
        port: '3306',
        database: 'webProject'
    })
    // 执行连接
    conn.connect();
    // 操作数据库
    conn.query(sql, data, function(error, results, fields){
        if(error) {
            throw error;
        }
        callback(results);
    })
    // 关闭连接
    conn.end();
}