const KoaRouter = require("@koa/router");
const { verifyLogin } = require("../middleware/login.middleware");
const { sign } = require("../controller/login.controller");
const { passwordEncryption } = require("../middleware/user.middleware");

const loginRouter = new KoaRouter({
  prefix: "/login",
});

loginRouter.post("/", passwordEncryption, verifyLogin, sign);

module.exports = loginRouter;
