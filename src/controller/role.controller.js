const roleService = require("../services/role.service");
const { checkArrayNotEmpty } = require("../utils/checkValue");
const { fetchLikeValue } = require("../utils/fetch-like-value");
const { fetchPageInfo } = require("../utils/fetch-page-info");
const fetchParamsId = require("../utils/fetch-params-id");
const { successModel } = require("../utils/request-model");

class RoleController {
  async create(ctx) {
    const result = await roleService.create(ctx.addPayload);
    const { menuList = [] } = ctx.request.body;
    if (checkArrayNotEmpty(menuList)) {
      try {
        for (const menuId of menuList) {
          const isExists = await roleService.hasMenu(menuId, result.insertId);
          if (!isExists) {
            await roleService.addMenu(menuId, result.insertId);
          }
        }
        console.log("进入了菜单添加");
        ctx.body = successModel("添加角色成功");
      } catch (err) {
        ctx.body = {
          code: -3002,
          message: "为角色添加菜单出错",
        };
        console.log(err);
      }
    } else {
      ctx.body = successModel("添加角色成功");
    }
  }
  // 删除用户
  async remove(ctx) {
    await roleService.remove(fetchParamsId(ctx));
    ctx.body = successModel("删除角色成功！");
  }
  // 编辑用户
  async update(ctx) {
    await roleService.update(fetchParamsId(ctx), ctx.editPayload);
    const { menuList = [] } = ctx.request.body;
    if (checkArrayNotEmpty(menuList)) {
      try {
        await roleService.updateMenus(menuList, fetchParamsId(ctx));
        ctx.body = successModel("编辑角色成功！");
      } catch (err) {
        ctx.body = {
          code: -3002,
          message: "为角色添加菜单出错",
        };
        console.log(err);
      }
    } else {
      ctx.body = successModel("编辑角色成功！");
    }
  }
  //   角色列表查询
  async list(ctx) {
    // 获取处理过的分页信息
    const { size, offset } = fetchPageInfo(ctx);
    const { roleName } = ctx.query;
    const result = await roleService.queryList(roleName, offset, size);
    const total = await roleService.fetchTotal(
      "WHERE roleName like ?",
      fetchLikeValue(roleName)
    );
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
  // 获取菜单列表
  async menuList(ctx) {
    const result = await roleService.queryMenuListByRoleId(fetchParamsId(ctx));
    ctx.body = successModel({
      message: "获取菜单列表成功！",
      data: result,
    });
  }
  // 获取权限列表
  async queryPermissions(ctx) {
    const result = await roleService.queryPermissionsByRoleId(
      fetchParamsId(ctx)
    );
    ctx.body = successModel({
      message: "获取权限列表成功！",
      data: result,
    });
  }
  // 查询未禁用角色列表
  async queryRoleAllList(ctx) {
    const result = await roleService.allList();
    ctx.body = successModel({
      message: "获取角色列表成功",
      data: result,
    });
  }
}

module.exports = new RoleController();
