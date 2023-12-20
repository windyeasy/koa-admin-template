const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  create,
  remove,
  update,
  list,
  detail,
  menuList,
} = require("../controller/role.controller");
const { verifyRole, verifyEditRole } = require("../middleware/role.middleware");
const { verifyMenuList } = require("../middleware/menu.middleware");

const roleRouter = new KoaRouter({
  prefix: "/role",
});
// 添加角色
roleRouter.post("/", verifyAuth, verifyMenuList, verifyRole, create);
// 删除角色
roleRouter.delete("/:id", verifyAuth, remove);
// 编辑角色
roleRouter.patch("/:id", verifyAuth, verifyMenuList, verifyEditRole, update);
// 获取角色列表
roleRouter.get("/", verifyAuth, list);
// 获取角色详情
roleRouter.get("/:id", verifyAuth, detail);
// 通过角色id获取菜单
roleRouter.get("/:id/menu", verifyAuth, menuList);
module.exports = roleRouter;
