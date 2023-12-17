const KoaRouter = require("@koa/router");
const {
  verifyUser,
  passwordEncryption,
} = require("../middleware/user.middleware");
const { create } = require("../controller/user.controller");
const { verifyAuth } = require("../middleware/login.middleware");

const userRouter = new KoaRouter({
  prefix: "/user",
});

userRouter.post("/", verifyAuth, verifyUser, passwordEncryption, create);

module.exports = userRouter;
