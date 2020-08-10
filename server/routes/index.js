var express = require("express");
var router = express.Router();

// 创建连接模块
const connection = require('./db');

// 连接数据库
connection.connect(()=>{
  console.log('数据库连接成功');
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 接受登陆请求
router.post("/checklogin", function (req, res) {
  // 接受用户名和密码
  let { username, password } = req.body;
  // console.log(username, password);
  // 去数据库查找是否存在这个用户名和密码的用户
  // 执行sql查询
  const sqlStr = `select * from users where username='${username}' and password='${password}'`
  connection.query(sqlStr,function(err,data){
    console.log(data)
    if(err){
      throw err;
    }else{
      res.send(data);
    }
  })
  
});

module.exports = router;

/* 
  创建数据库，建表，插入数据和查询数据
  show databases;
  create database vuexms;
  use vuexms;
  create table users (
    id int primary key auto_increment,
    username varchar(50),
    password varchar(50),
    realname varchar(50),
    idType varchar(50)
  );
  desc users;
  insert into users(username,password,realname,idType) values('admin',123456,'杨文龙','130130123');
  select * from users;
  insert into users(username,password,realname,idType) values('girls',123456,'李晓璇','130130456');
  select * from users where username="admin";
  select * from users where username="admin" and password="123456";
*/

/* 
node连接数据库
在server中
cnpm install mysql -S

创建db.js
// 引入mysql
var mysql = require("mysql");
// 创建连接
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vuexms"
});
// 暴露出去
module.exports = connection;

切入index.js
// 创建连接模块
const connection = require('./db.js');
// 连接数据库
// connection.connect();
connection.connect(()=>{
  console.log('数据库连接成功');
});

重启服务
nodemon app
*/
