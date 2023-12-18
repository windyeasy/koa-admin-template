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
  // 查询用户列表
  async queryList(offset, pageSize) {
    const statement = `SELECT * FROM ${this.tbName}  LIMIT ? OFFSET ?`;
    const [result] = await connection.query(statement, [pageSize, offset]);
    return result;
  }
  async queryInfo(id) {
    const statement = `SELECT * FROM ${this.tbName}  WHERE id=?`;
    const [result] = await connection.query(statement, [id]);
    return result[0];
  }
}
const userService = new UserService("user");
module.exports = userService;
