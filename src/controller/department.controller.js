const departmentService = require("../services/department.service");
const { fetchPageInfo } = require("../utils/fetch-page-info");
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
    await departmentService.update(fetchParamsId(ctx), ctx.payload);
    ctx.body = successModel("编辑部门成功！");
  }
  //   部门列表查询
  async list(ctx) {
    const { depName } = ctx.query;
    const result = await departmentService.queryList(depName);
    ctx.body = successModel({
      message: "列表获取成功",
      data: result,
    });
  }
  //  获取部门详情
  async detail(ctx) {
    const result = await departmentService.queryInfo(fetchParamsId(ctx));
    ctx.body = successModel({
      message: "详情获取成功！",
      data: result,
    });
  }
  // 查询全部未禁用部门
  async allList(ctx) {
    const result = await departmentService.allList();
    ctx.body = successModel({
      message: "获取部门列表成功",
      data: result,
    });
  }
}

module.exports = new DepartmentController();
