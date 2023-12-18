const departmentService = require("../services/department.service");
const fetchParamsId = require("../utils/fetch-params-id");
const { successModel } = require("../utils/request-model");

class DepartmentController {
  // 创建部门
  async create(ctx) {
    await departmentService.create(ctx.payload);
    ctx.body = successModel("添加部门成功！");
  }
  // 删除部门
  async remove(ctx) {
    await departmentService.remove(fetchParamsId(ctx));
    ctx.body = successModel("删除部门成功！");
  }
  // 编辑部门
  async update(ctx) {
    await departmentService.update(fetchParamsId(ctx), ctx.editPayload);
    ctx.body = successModel("编辑部门成功！");
  }
}

module.exports = new DepartmentController();
