const connection = require("../app/database");
class UserService {
  // 通过用户查询用户
  async queryUserByUsername(username) {
    const statement = "SELECT * FROM user WHERE username=?";
    const [result] = await connection.execute(statement, [username]);
    return result;
  }
  // 查询用户
  async queryUser(username, password) {
    const statement = "SELECT * FROM user WHERE username=? AND password=?";
    const [result] = await connection.execute(statement, [username, password]);
    return result;
  }
  // 判断用户是否已经存在
  async checkUserExists(username) {
    const result = await this.queryUserByUsername(username);
    return !!result.length;
  }
  //   用户创建
  async create(payload) {
    const statement = "INSERT INTO user SET ?";
    const [result] = await connection.query(statement, payload);
    return result;
  }
}
const userService = new UserService();
module.exports = userService;
