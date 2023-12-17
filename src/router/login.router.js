const KoaRouter = require("@koa/router");

const loginRouter = new KoaRouter({
  prefix: "/login",
});

loginRouter.post("/", (ctx, next) => {
  ctx.body = "访问接口成功~";
});

module.exports = loginRouter;
