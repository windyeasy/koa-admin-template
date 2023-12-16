const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const registerRouter = require("../router");

app.use(bodyParser());

// 注册路由
registerRouter(app);
module.exports = app;
