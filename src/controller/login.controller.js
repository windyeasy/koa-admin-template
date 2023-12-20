const jwt = require("jsonwebtoken");
const { privateKey } = require("../config/secret");
class LoginController {
  async sign(ctx) {
    const payload = ctx.user;
    const token = jwt.sign(
      { id: payload.id, username: payload.username },
      privateKey,
      {
        algorithm: "RS256",
        expiresIn: 60 * 60 * 24 * 7,
      }
    );
    // 派发token
    // 1. 得到私钥密钥，通过jsonwebtoken, 生成token
    ctx.body = {
      code: 0,
      message: "登录成功",
      data: {
        id: payload.id,
        username: payload.username,
        token,
      },
    };
  }
}

module.exports = new LoginController();
