const errorRequest = require("../error-request");
const {
  USERNAME_OR_PASSWORD_NOT_NULL,
  FIELD_NOT_NULL,
  USER_ALREADY_EXISTS,
} = require("../error-request/error-type");
const userService = require("../services/user.service");
const fetchParamsId = require("../utils/fetch-params-id");
const md5password = require("../utils/md5password");
async function verifyUser(ctx, next) {
  const { username, password, nickname } = ctx.request.body;
  // 判断是否用户名密码是否为空
  if (!username || !password) {
    return errorRequest.throw(USERNAME_OR_PASSWORD_NOT_NULL, ctx);
  }
  //   判断是否填入昵称
  if (!nickname) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "nickname");
  }
  //   判断用户是否存在
  const isExists = await userService.checkUserExists(username);
  if (isExists) {
    return errorRequest.throw(USER_ALREADY_EXISTS, ctx);
  }
  await next();
}
// 密码加密
async function passwordEncryption(ctx, next) {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password);
  await next();
}
// 验证用户编辑
async function verifyEditUser(ctx, next) {
  const { username, nickname } = ctx.request.body;
  // 判断是否用户名密码是否为空
  if (!username) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "username");
  }
  //   判断是否填入昵称
  if (!nickname) {
    return errorRequest.throw(FIELD_NOT_NULL, ctx, "nickname");
  }
  //   判断用户是否存在
  const [userInfo] = await userService.queryDataByKeyValue({
    key: "username",
    value: username,
  });
  if (userInfo && userInfo.id != fetchParamsId(ctx)) {
    return errorRequest.throw(USER_ALREADY_EXISTS, ctx);
  }

  await next();
}
module.exports = {
  verifyUser,
  passwordEncryption,
  verifyEditUser,
};
