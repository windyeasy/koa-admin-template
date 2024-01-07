const KoaRouter = require("@koa/router");
const { createAvatarFile } = require("../controller/file.controller");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  avatarHandler,
  verifySingleFile,
} = require("../middleware/file.middleware");
const fileRouter = new KoaRouter({
  prefix: "/file",
});

// 上传头像
fileRouter.post(
  "/avatar",
  verifyAuth,
  avatarHandler,
  verifySingleFile("avatar"),
  createAvatarFile
);

// 查看头像

// loginRouter.patch("/:id", verifyAuth);
// loginRouter.delete("/:id", verifyAuth);
module.exports = fileRouter;
