const roleService = require("../services/role.service");
const userService = require("../services/user.service");
const { fetchLikeValue } = require("../utils/fetch-like-value");
const { fetchPageInfo } = require("../utils/fetch-page-info");
const fetchParamsId = require("../utils/fetch-params-id");
const { formatTime } = require("../utils/format-time");
const { successModel } = require("../utils/request-model");

class UserController {
  async create(ctx) {
    await userService.create(ctx.addPayload);
    ctx.body = successModel("添加用户成功！");
  }
  // 删除用户
  async remove(ctx) {
    await userService.remove(fetchParamsId(ctx));
    ctx.body = successModel("删除用户成功！");
  }
  // 编辑用户
  async update(ctx) {
    await userService.update(fetchParamsId(ctx), ctx.editPayload);
    ctx.body = successModel("编辑用户成功！");
  }
  // 密码编辑
  async modifyPassword(ctx) {
    const { password } = ctx.request.body;
    await userService.update(fetchParamsId(ctx), { password });
    ctx.body = successModel({ message: "用户密码编辑成功！" });
  }
  // 查询用户列
  async list(ctx) {
    // 获取处理过的分页信息
    const { size, offset } = fetchPageInfo(ctx);
    const { username, nickname, telephone, startTime, endTime, state } =
      ctx.query;
    const result = await userService.queryList(
      username,
      nickname,
      telephone,
      state,
      startTime,
      endTime,
      offset,
      size
    );
    const total = await userService.fetchTotal(
      `
    WHERE username like ? and 
    nickname like ? and 
    telephone like ? and
    createAt >= ? and  createAt <= ?`,
      fetchLikeValue(username),
      fetchLikeValue(nickname),
      fetchLikeValue(telephone),
      startTime || 0,
      endTime || formatTime(Date.now())
    );
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
  async queryUserInfo(ctx) {
    const { id } = ctx.user;
    // 获取用户信息
    const result = await userService.queryBaseInfo(id);

    // 获取菜单信息
    let menuList = [];
    if (result && result.roleId) {
      // 菜单列表
      menuList = await roleService.queryMenuListByRoleId(result.roleId);
    }
    // 获取权限菜单
    const permissions = await roleService.queryPermissionsByRoleId(
      result.roleId
    );
    const data = { ...result, menuList, permissions };
    ctx.body = successModel({
      message: "用户信息获取成功！",
      data,
    });
  }
}

module.exports = new UserController();
