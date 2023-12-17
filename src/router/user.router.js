const KoaRouter = require("@koa/router");
const {
  verifyUser,
  passwordEncryption,
} = require("../middleware/user.middleware");

const { create, update, remove } = require("../controller/user.controller");
const { verifyAuth } = require("../middleware/login.middleware");

const userRouter = new KoaRouter({
  prefix: "/user",
});
// 添加用户
userRouter.post("/", verifyAuth, verifyUser, passwordEncryption, create);
// 删除用户
userRouter.delete("/:id", verifyAuth, remove);
// 编辑用户
userRouter.patch("/:id", verifyAuth, update);
module.exports = userRouter;
