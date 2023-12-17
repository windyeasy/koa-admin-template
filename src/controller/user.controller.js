const userService = require("../services/user.service");
class UserController {
  async create(ctx) {
    const {
      username,
      password,
      nickname,
      telephone = null,
      email = null,
      intro = null,
    } = ctx.request.body;
    await userService.create({
      username,
      password,
      nickname,
      telephone,
      email,
      intro,
    });
    ctx.body = {
      code: 0,
      message: "创建用户成功！",
    };
  }
  // 编辑用户
  async update(ctx) {
    const { id } = ctx.params;
  }
  // 查询用户列表
  async list() {}
}

module.exports = new UserController();
