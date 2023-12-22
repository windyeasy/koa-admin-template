const jwt = require("jsonwebtoken");
const { publicKey } = require("../config/secret");
const errorRequest = require("../error-request");
const {
  USERNAME_OR_PASSWORD_NOT_NULL,
  USERNAME_OR_PASSWORD_ERROR,
} = require("../error-request/error-type");

const userService = require("../services/user.service");

async function verifyLogin(ctx, next) {
  // 验证是否输入用户名和密码
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    errorRequest.throw(USERNAME_OR_PASSWORD_NOT_NULL, ctx);
  }

  //   判断用户是否存在
  const users = await userService.queryUser(username, password);
  if (!users.length) {
    return errorRequest.throw(USERNAME_OR_PASSWORD_ERROR, ctx);
  }
  //   存储用户信息
  ctx.user = users[0];
  await next();
}

// 验证是否登录授权
async function verifyAuth(ctx, next) {
  const authorization = ctx.headers["authorization"];
  const token = authorization ? authorization.replace("Bearer ", "") : "";
  try {
    const result = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    });
    ctx.user = result;
  } catch (err) {
    console.log(err);
    ctx.user = null;
    ctx.body = {
      code: -401,
      message: "token无效或过期请重新登录",
    };
    return;
  }
  if (ctx.user) {
    await next();
  }
}
module.exports = { verifyLogin, verifyAuth };
