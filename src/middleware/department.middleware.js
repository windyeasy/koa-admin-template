const errorRequest = require("../error-request");
const {
  IS_EXISTS,
  IS_NOT_EXISTS,
  FIELD_NOT_NULL,
} = require("../error-request/error-type");
const departmentService = require("../services/department.service");
const { checkValueNotDefined } = require("../utils/checkValue");
const { fetchId } = require("../utils/fetch-id");
const fetchParamsId = require("../utils/fetch-params-id");

async function verifyDepartment(ctx, next) {
  const {
    depName,
    sort = 0,
    state = 1,
    intro = "",
    parentId = null,
  } = ctx.request.body;
  if (!depName) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "部门名称");
  }
  //   判断是否顶层菜单, 顶层部门名不能重复
  if (parentId === null || parentId === "") {
    const depList = await departmentService.queryDataByKeyValue({
      key: "depName",
      value: depName,
    });
    if (depList && depList.length) {
      return errorRequest.throw(IS_EXISTS, ctx, "部门名称");
    }
  }
  //   验证上级部门是否存在
  if (checkValueNotDefined(parentId) && parentId !== "") {
    const depList = await departmentService.queryDataByKeyValue({
      key: "id",
      value: parentId,
    });
    if (depList && !depList.length) {
      return errorRequest.throw(IS_NOT_EXISTS, ctx, "上级部门");
    }
  }
  ctx.payload = {
    depName,
    sort,
    state,
    intro,
    parentId: fetchId(parentId),
  };
  await next();
}
async function verifyEditDepartment(ctx, next) {
  const {
    depName,
    sort = 0,
    state = 1,
    intro = "",
    parentId = null,
  } = ctx.request.body;
  if (!depName) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "部门名称");
  }
  //   判断是否顶层菜单, 顶层部门名不能重复
  if (parentId === null || parentId === "") {
    const depList = await departmentService.queryDataByKeyValue({
      key: "id",
      value: fetchParamsId(ctx),
    });
    // 判断查询出来的名称是否是当前编辑的名称
    if (depList && depList.length && depList[0].depName != depName) {
      return errorRequest.throw(IS_EXISTS, ctx, "部门名称");
    }
  }
  //   验证上级部门是否存在
  if (checkValueNotDefined(parentId) && parentId !== "") {
    const depList = await departmentService.queryDataByKeyValue({
      key: "id",
      value: parentId,
    });
    if (depList && !depList.length) {
      return errorRequest.throw(IS_NOT_EXISTS, ctx, "上级部门");
    }
  }
  ctx.payload = {
    depName,
    sort,
    state,
    intro,
    parentId: fetchId(parentId),
  };
  await next();
}
module.exports = {
  verifyDepartment,
  verifyEditDepartment,
};
