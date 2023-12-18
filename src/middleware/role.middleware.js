const errorRequest = require("../error-request");
const { FIELD_NOT_NULL, IS_EXISTS } = require("../error-request/error-type");
const roleService = require("../services/role.service");
const fetchParamsId = require("../utils/fetch-params-id");

async function verifyRole(ctx, next) {
  const {
    roleName,
    roleIndex,
    sort = 0,
    state = 1,
    intro = "",
  } = ctx.request.body;
  if (!roleName) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "roleName");
  }
  if (!roleIndex) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "roleIndex");
  }
  //   通过角色名称查询角色名称是否已经存在
  const isRoleNameExists = await roleService.checkRoleExistsByRoleName(
    roleName
  );

  if (isRoleNameExists) {
    return errorRequest.throw(IS_EXISTS, ctx, "角色名称");
  }
  //   通过角色索引查询角色名称是否已经存在
  const isRoleIndexExists = await roleService.checkRoleExistsByRoleIndex(
    roleIndex
  );
  if (isRoleIndexExists) {
    return errorRequest.throw(IS_EXISTS, ctx, "角色索引");
  }
  ctx.addPayload = { roleName, roleIndex, sort, state, intro };
  await next();
}

async function verifyEditRole(ctx, next) {
  const {
    roleName,
    roleIndex,
    sort = 0,
    state = 1,
    intro = "",
  } = ctx.request.body;
  if (!roleName) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "roleName");
  }
  if (!roleIndex) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "roleIndex");
  }
  //   通过角色名称查询角色名称是否已经存在
  const [roleInfo] = await roleService.queryDataByKeyValue({
    key: "roleName",
    value: roleName,
  });
  if (roleInfo && roleInfo.id != fetchParamsId(ctx)) {
    return errorRequest.throw(IS_EXISTS, ctx, "角色名称");
  }
  //   通过角色角色索引查询角色名称是否已经存在
  const [roleInfo2] = await roleService.queryDataByKeyValue({
    key: "roleIndex",
    value: roleIndex,
  });
  if (roleInfo2 && roleInfo2.id != fetchParamsId(ctx)) {
    return errorRequest.throw(IS_EXISTS, ctx, "角色索引");
  }
  ctx.editPayload = { roleName, roleIndex, sort, state, intro };
  await next();
}

module.exports = {
  verifyRole,
  verifyEditRole,
};
