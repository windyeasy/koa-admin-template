const errorRequest = require("../error-request");
const {
  FIELD_NOT_NULL,
  IS_EXISTS,
  MENU_ID_NOT_EXISTS,
} = require("../error-request/error-type");
const menuService = require("../services/menu.service");
const { checkArrayNotEmpty } = require("../utils/checkValue");
const { fetchId } = require("../utils/fetch-id");
const fetchParamsId = require("../utils/fetch-params-id");

async function verifyMenuAdd(ctx, next) {
  const {
    menuName,
    url = "",
    link = "",
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
    link,
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
    icon = "",
    sort = 0,
    link = "",
    menuType = 1,
    isLink = 0,
    isIframe = 0,
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
    icon,
    sort,
    menuType,
    isLink,
    link,
    isIframe,
    permission,
    parentId: fetchId(parentId),
    redirectUrl,
  };
  await next();
}

// 验证menuList是否有不存在的id
async function verifyMenuList(ctx, next) {
  const { menuList = [] } = ctx.request.body;
  if (checkArrayNotEmpty(menuList)) {
    const flag = await menuService.checkIdsNotIsExits(menuList);
    if (flag) {
      return errorRequest.throw(MENU_ID_NOT_EXISTS, ctx);
    }
  }
  if (!ctx.request.body.menuList) {
    ctx.request.body.menuList = [];
  }
  await next();
}
module.exports = {
  verifyMenuAdd,
  verifyMenuEdit,
  verifyMenuList,
};
