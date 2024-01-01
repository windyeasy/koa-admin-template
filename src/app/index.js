const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const registerRouter = require("../router");
const cors = require("@koa/cors");
app.use(bodyParser());
// 添加全局跨域
app.use(cors());

// 注册路由
registerRouter(app);
module.exports = app;
