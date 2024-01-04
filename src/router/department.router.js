const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  create,
  remove,
  update,
  list,
  detail,
  allList,
} = require("../controller/department.controller");
const {
  verifyDepartment,
  verifyEditDepartment,
} = require("../middleware/department.middleware");

const departmentRouter = new KoaRouter({
  prefix: "/department",
});
// 添加部门
departmentRouter.post("/", verifyAuth, verifyDepartment, create);
// 删除部门
departmentRouter.delete("/:id", verifyAuth, remove);
// 编辑部门
departmentRouter.patch("/:id", verifyAuth, verifyEditDepartment, update);
// 获取部门列表
departmentRouter.get("/", verifyAuth, list);
// 查询未禁用全部部门列表
departmentRouter.get("/all", verifyAuth, allList);
// 获取部门详情
departmentRouter.get("/:id", verifyAuth, detail);

module.exports = departmentRouter;
