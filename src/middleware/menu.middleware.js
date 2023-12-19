const errorRequest = require("../error-request");
const { FIELD_NOT_NULL, IS_EXISTS } = require("../error-request/error-type");
const menuService = require("../services/menu.service");
const { fetchId } = require("../utils/fetch-id");
const fetchParamsId = require("../utils/fetch-params-id");

async function verifyMenuAdd(ctx, next) {
  const {
    menuName,
    url = "",
    state = 1,
    icon = "",
    sort = 0,
    menuType = 1,
    isLink = 0,
    isIframe = 1,
    permission = "",
    parentId = null,
    redirectUrl = "",
  } = ctx.request.body;

  if (!menuName) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "菜单名称");
  }
  //   查询菜单名称是否已经存在被占用
  const menuList = await menuService.queryDataByKeyValue({
    key: "menuName",
    value: menuName,
  });
  if (menuList && menuList.length) {
    return errorRequest.throw(IS_EXISTS, ctx, "菜单名称");
  }
  ctx.addPayload = {
    menuName,
    url,
    state,
    icon,
    sort,
    menuType,
    isLink,
    isIframe,
    permission,
    parentId: fetchId(parentId),
    redirectUrl,
  };
  await next();
}
async function verifyMenuEdit(ctx, next) {
  const {
    menuName,
    url = "",
    state = 1,
    icon = "",
    sort = 0,
    menuType = 1,
    isLink = 0,
    isIframe = 1,
    permission = "",
    parentId = null,
    redirectUrl = "",
  } = ctx.request.body;

  if (!menuName) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "菜单名称");
  }

  //   查询菜单名称是否已经存在被占用
  const [menuInfo] = await menuService.queryDataByKeyValue({
    key: "menuName",
    value: menuName,
  });
  if (menuInfo && menuInfo.id != fetchParamsId(ctx)) {
    return errorRequest.throw(IS_EXISTS, ctx, "菜单名称");
  }

  ctx.editPayload = {
    menuName,
    url,
    state,
    icon,
    sort,
    menuType,
    isLink,
    isIframe,
    permission,
    parentId: fetchId(parentId),
    redirectUrl,
  };
  await next();
}
module.exports = {
  verifyMenuAdd,
  verifyMenuEdit,
};
