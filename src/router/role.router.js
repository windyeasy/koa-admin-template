const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const { create, remove, update } = require("../controller/role.controller");
const { verifyRole, verifyEditRole } = require("../middleware/role.middleware");

const roleRouter = new KoaRouter({
  prefix: "/role",
});
// 添加角色
roleRouter.post("/", verifyAuth, verifyRole, create);
// 删除角色
roleRouter.delete("/:id", verifyAuth, remove);
// 编辑角色
roleRouter.patch("/:id", verifyAuth, verifyEditRole, update);

module.exports = roleRouter;
