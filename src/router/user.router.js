const KoaRouter = require("@koa/router");
const {
  verfiyUser,
  passwordEncryption,
} = require("../middleware/user.middleware");
const { create } = require("../controller/user.controller");

const userRouter = new KoaRouter({
  prefix: "/user",
});

userRouter.post("/", verfiyUser, passwordEncryption, create);

module.exports = userRouter;
