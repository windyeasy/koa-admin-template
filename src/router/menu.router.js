const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  create,
  remove,
  update,
  list,
} = require("../controller/menu.controller");
const {
  verifyMenuAdd,
  verifyMenuEdit,
} = require("../middleware/menu.middleware");
const menuRouter = new KoaRouter({
  prefix: "/menu",
});

// 添加菜单
menuRouter.post("/", verifyAuth, verifyMenuAdd, create);
// 删除菜单
menuRouter.delete("/:id", verifyAuth, remove);
// 编辑菜单
menuRouter.patch("/:id", verifyAuth, verifyMenuEdit, update);
// 查询菜单
menuRouter.get("/", verifyAuth, list);

module.exports = menuRouter;
