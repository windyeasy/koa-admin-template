const menuService = require("../services/menu.service");
const fetchParamsId = require("../utils/fetch-params-id");
const { successModel } = require("../utils/request-model");

class MenuController {
  // 创建菜单
  async create(ctx) {
    await menuService.create(ctx.addPayload);
    ctx.body = successModel("添加菜单成功！");
  }
  // 删除菜单
  async remove(ctx) {
    await menuService.remove(fetchParamsId(ctx));
    ctx.body = successModel("删除菜单成功！");
  }
  // 编辑菜单
  async update(ctx) {
    await menuService.update(fetchParamsId(ctx), ctx.editPayload);
    ctx.body = successModel("编辑菜单成功！");
  }
  //   查询菜单列表
  async list(ctx) {
    const result = await menuService.queryList();
    ctx.body = successModel({
      message: "列表获取成功",
      data: result,
    });
  }
}

module.exports = new MenuController();
