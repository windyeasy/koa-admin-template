const KoaRouter = require("@koa/router");
const {
  verifyUser,
  passwordEncryption,
} = require("../middleware/user.middleware");
const { create } = require("../controller/user.controller");

const userRouter = new KoaRouter({
  prefix: "/user",
});

userRouter.post("/", verifyUser, passwordEncryption, create);

module.exports = userRouter;
