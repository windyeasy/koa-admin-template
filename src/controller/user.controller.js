const userService = require("../services/user.service");

class UserController {
  async create(ctx) {
    const {
      username,
      password,
      nickname,
      telphone = null,
      email = null,
      intro = null,
    } = ctx.request.body;
    await userService.create({
      username,
      password,
      nickname,
      telphone,
      email,
      intro,
    });
    ctx.body = {
      code: 0,
      message: "创建用户成功！",
    };
  }
}

module.exports = new UserController();
