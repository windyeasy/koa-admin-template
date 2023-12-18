const userService = require("../services/user.service");
const { fetchPageInfo } = require("../utils/fetch-page-info");
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
  // 查询用户列
  async list(ctx) {
    // 获取处理过的分页信息
    const { size, offset } = fetchPageInfo(ctx);
    const result = await userService.queryList(offset, size);
    const total = await userService.fetchTotal();
    ctx.body = successModel({
      message: "列表获取成功",
      data: {
        list: result,
        total,
      },
    });
  }
  async detail(ctx) {
    const result = await userService.queryInfo(fetchParamsId(ctx));
    ctx.body = successModel({
      message: "详情获取成功！",
      data: result,
    });
  }
}

module.exports = new UserController();
