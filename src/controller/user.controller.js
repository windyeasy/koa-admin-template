const userService = require("../services/user.service");
const fetchParamsId = require("../utils/fetch-params-id");
const { successModel } = require("../utils/request-model");

class UserController {
  async create(ctx) {
    await userService.create(ctx.request.body);
    ctx.body = successModel("添加用户成功！");
  }
  // 删除用户
  async remove(ctx) {
    await userService.remove(fetchParamsId(ctx));
    ctx.body = successModel("删除用户成功！");
  }
  // 编辑用户
  async update(ctx) {
    await userService.update(fetchParamsId(ctx), ctx.request.body);
    ctx.body = successModel("编辑用户成功！");
  }
  // 查询用户列表
  async list() {}
}

module.exports = new UserController();
