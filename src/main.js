const { SERVER_PORT } = require("./config/server");

const app = require("../src/app");

app.listen(SERVER_PORT, () => {
  console.log(`koa~${SERVER_PORT}~端口服务启动成功~`);
});
