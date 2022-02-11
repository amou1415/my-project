const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysqlbase = require('./db');

app.use(bodyParser.urlencoded({
    extended: false
}));


// 登录路由
app.post('/login', (req, res) => {
    let data = req.body;

    let sql = 'select * from user where email = ?';
    // 组装查询sql的s参数
    let sqlData = [
        data.username,
        data.password
    ]

    mysqlbase.mysql_base(sql, sqlData[1], (results) => {
        // 返回查询结果
        console.log(results[0], '结果');
        /**
         * 先验证邮箱是否存在
         * 存在就验证用户名 匹配就抛出success 不匹配就抛出err
         */
        if (results[0] != undefined) {
            if (sqlData[0] === results[0].u_name) {
                res.send({
                    msg: 'true',
                    user: results
                });
            } else {
                res.send({
                    msg: 'false',
                    error: '用户名或邮箱不匹配'
                });
            }
        } else if (results[0] === undefined) {
            /**
             * 邮箱不存在就进入注册
             * 先验证输入的用户名是否重复
             * 不重复就注册，重复抛出错误
             */
            mysqlbase.mysql_base('select * from user where u_name = ?', sqlData[0], (name_res) => {
                if (name_res[0] != undefined) {
                    res.send({
                        msg: 'false',
                        error: '尊敬的新用户，该用户名已被使用'
                    });
                } else {
                    let insertDate = {
                        u_name: data.username,
                        email: data.password,
                    }
                    mysqlbase.mysql_base("insert into user set ?", insertDate, (inser_results) => {
                        if (inser_results.affectedRows > 0) {
                            mysqlbase.mysql_base('select * from user where u_name = ? and email = ?', sqlData, (inser_msg) => {
                                res.send({
                                    msg: 'true',
                                    user: inser_msg
                                });
                            })
                        } else {
                            res.send({
                                msg: 'false',
                                user: inser_results
                            });
                        }
                    })
                }
            })
        } else {
            res.send({
                msg: 'false'
            });
        }
    })
})

// 获取首页游戏列表
app.post('/getGameList', (req, res) => {
    let data = req.body;
    let sql;
    console.log(data.id, 'data');
    /**
     * 请求参数带id就返回指定游戏id
     * 不带参数就返回游戏列表
     */
    if (data.id === undefined) {
        sql = 'SELECT * FROM game';
        mysqlbase.mysql_base(sql, data, (game_msg) => {
            res.send({
                msg: '成功',
                list: game_msg
            });
        })
    } else {
        sql = 'select * from game where id = ?';
        mysqlbase.mysql_base(sql, [data.id], (res_) => {
            console.log(res_);
            res.send({
                msg: '成功',
                list: res_
            });
        })
    }

})


app.listen("3000", () => {
    console.log("启动服务器成功！")
})