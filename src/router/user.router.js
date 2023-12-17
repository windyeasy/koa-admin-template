const KoaRouter = require("@koa/router");
const {
  verifyUser,
  passwordEncryption,
} = require("../middleware/user.middleware");
const { create } = require("../controller/user.controller");
const { verifyAuth } = require("../middleware/login.middleware");
const { remove } = require("../middleware/base.middleware");

const userRouter = new KoaRouter({
  prefix: "/user",
});
// 添加用户
userRouter.post("/", verifyAuth, verifyUser, passwordEncryption, create);
// 删除用户
userRouter.delete("/:id", verifyAuth, remove("user"));

module.exports = userRouter;
