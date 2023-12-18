const roleService = require("../services/role.service");
const { fetchPageInfo } = require("../utils/fetch-page-info");
const fetchParamsId = require("../utils/fetch-params-id");
const { successModel } = require("../utils/request-model");

class RoleController {
  async create(ctx) {
    await roleService.create(ctx.addPayload);
    ctx.body = successModel("添加角色成功");
  }
  // 删除用户
  async remove(ctx) {
    await roleService.remove(fetchParamsId(ctx));
    ctx.body = successModel("删除角色成功！");
  }
  // 编辑用户
  async update(ctx) {
    await roleService.update(fetchParamsId(ctx), ctx.editPayload);
    ctx.body = successModel("编辑角色成功！");
  }
  //   角色列表查询
  async list(ctx) {
    // 获取处理过的分页信息
    const { size, offset } = fetchPageInfo(ctx);
    const result = await roleService.queryList(offset, size);
    const total = await roleService.fetchTotal();
    ctx.body = successModel({
      message: "列表获取成功",
      data: {
        list: result,
        total,
      },
    });
  }
  //  获取角色详情
  async detail(ctx) {
    const result = await roleService.queryInfo(fetchParamsId(ctx));
    ctx.body = successModel({
      message: "详情获取成功！",
      data: result,
    });
  }
}

module.exports = new RoleController();
