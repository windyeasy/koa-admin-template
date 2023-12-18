const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const { create, remove } = require("../controller/department.controller");
const { verifyDepartment } = require("../middleware/department.middleware");

const departmentRouter = new KoaRouter({
  prefix: "/department",
});

departmentRouter.post("/", verifyAuth, verifyDepartment, create);
departmentRouter.delete("/:id", verifyAuth, remove);
module.exports = departmentRouter;
