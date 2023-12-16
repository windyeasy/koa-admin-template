const connection = require("../app/database");

class UserService {
  async queryUser(username) {
    const statement = "SELECT * FROM user WHERE username=?";

    const [result] = await connection.execute(statement, [username]);
    return result;
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
