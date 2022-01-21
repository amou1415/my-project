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

    let sql = 'select * from user where u_name = ? and email = ?';
    // 组装查询sql的s参数
    let sqlData = [
        data.username,
        data.password
    ]

    mysqlbase.mysql_base(sql, sqlData, (results) => {
        // 返回查询结果
        console.log(results[0], '结果');
        if (results[0] != undefined) {
            // 用户保存信息
            res.send({
                msg: 'true',
                user: results
            });
        } else if (results[0] === undefined) {
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
        } else {
            res.send({
                msg: 'false'
            });
        }
    })
})
// 注册
app.post('/register', (req, res) => {
    // 1、路径请求第一步：现货区数据
    let data = req.body;
    // console.log(11);
    // 2、路径请求第二步：进行数据处理
    // *是否能注册，首先要判断这个人是否已经注册
    let username = data.username;
    let sql = "select count(1) cn from user where u_name=?"
    mysqlbase.mysql_base(sql, [username], (results) => {
        console.log(results);
        console.log(results[0].cn);
        if (results[0].cn > 0) {
            res.send({
                msg: '该姓名已经注册过',
                flag: 'false'
            });
            // res.send('register.html',{msg:'该姓名已经注册过',flag:'false'});
            // return; // 把程序打断掉
        } else {
            console.log('程序继续执行');

            // *没有注册过的，插入数据
            sql = "insert into user set ?"
            let insertDate = {
                id: data.id,
                username: data.username,
                password: data.password,
            }
            mysqlbase.mysql_base(sql, insertDate, (results) => {
                console.log(results);
                if (results.affectedRows > 0) {
                    // res.send({ msg: "注册成功", falg: 'true' });
                    res.send({
                        msg: 'true'
                    });
                } else {
                    res.send({
                        falg: 'false'
                    });
                }

            })
        }
    })
})

// 获取首页游戏列表
app.post('/getGameList',(req, res) => {
    let data = req.body;
    let sql;
    console.log(data.id,'data');
    if(data.id === undefined){
        sql = 'SELECT * FROM game';
        mysqlbase.mysql_base(sql,data,(game_msg)=>{
            res.send({
                msg: '成功',
                list: game_msg
            });
        })
    }else {
        sql = 'select * from game where id = ?';
        mysqlbase.mysql_base(sql,[data.id],(res_)=>{
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