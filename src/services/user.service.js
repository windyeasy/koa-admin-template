const connection = require("../app/database");
const BaseService = require("./base.service");
class UserService extends BaseService {
  // 通过用户名查询用户
  async queryUserByUsername(username) {
    const statement = `SELECT * FROM ${this.tbName} WHERE username=?`;
    const [result] = await connection.execute(statement, [username]);
    return result;
  }
  // 查询用户
  async queryUser(username, password) {
    const statement = `SELECT * FROM ${this.tbName} WHERE username=? AND password=?`;
    const [result] = await connection.execute(statement, [username, password]);
    return result;
  }
  // 判断用户是否已经存在
  async checkUserExists(username) {
    const result = await this.queryUserByUsername(username);
    return !!result.length;
  }
}
const userService = new UserService("user");
module.exports = userService;
