const roleService = require("../services/role.service");
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
    await userService.update(fetchParamsId(ctx), ctx.request.body);
    ctx.body = successModel("编辑角色成功！");
  }
}

module.exports = new RoleController();
