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
const { verifyDepartment } = require("../middleware/department.middleware");

const departmentRouter = new KoaRouter({
  prefix: "/department",
});
// 添加部门
departmentRouter.post("/", verifyAuth, verifyDepartment, create);
// 删除部门
departmentRouter.delete("/:id", verifyAuth, remove);
// 编辑部门
departmentRouter.patch("/:id", verifyAuth, verifyDepartment, update);
// 获取部门列表
departmentRouter.get("/", verifyAuth, list);
// 查询未禁用全部部门列表
departmentRouter.get("/all", verifyAuth, allList);
// 获取部门详情
departmentRouter.get("/:id", verifyAuth, detail);
// departmentRouter.get("/:r")
module.exports = departmentRouter;
