const mysql = require("mysql2");

const connectPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "cms-tem",
  connectionLimit: 5,
});

// 检测是否已经连接数据库
connectPool.getConnection((err, connection) => {
  if (err) {
    console.log("数据库连接失败：", err);
    return;
  }
  connection.connect((err) => {
    if (err) {
      console.log("数据库交互失败：", err);
      return;
    } else {
      console.log("数据库交互成功，请使用~");
    }
  });
});
const connection = connectPool.promise();
module.exports = connection;
