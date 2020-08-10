// 引入mysql
var mysql = require('mysql');
// 创建连接
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ywl1014.",
  database: "vuexms",
  // useConnectionPooling: true
});
// 暴露出去
module.exports = connection;
