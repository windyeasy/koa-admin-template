const connection = require("../app/database");
const { fetchLikeValue } = require("../utils/fetch-like-value");
const { formatTime } = require("../utils/format-time");
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
    const statement = `SELECT * FROM ${this.tbName} WHERE username=? AND password=? AND state=1`;
    const [result] = await connection.execute(statement, [username, password]);
    return result;
  }
  // 判断用户是否已经存在
  async checkUserExists(username) {
    const result = await this.queryUserByUsername(username);
    return !!result.length;
  }
  // 查询用户列表
  async queryList(
    username,
    nickname,
    telephone,
    state,
    startTime,
    endTime,
    offset,
    pageSize
  ) {
    // 状态查询
    const stateQueryStatement =
      state !== undefined && state != null ? `state=${state} and ` : "";

    const statement = `SELECT id, username, roleId,
            departmentId, nickname, telephone, 
            state,
            email, intro, createAt, updateAt 
     FROM ${this.tbName} 
          WHERE username like ? and 
          nickname like ? and 
          telephone like ? and
          ${stateQueryStatement}
          createAt >= ? and  createAt <= ?  
          order by createAt desc 
          LIMIT ? OFFSET ?`;
    const [result] = await connection.query(statement, [
      fetchLikeValue(username),
      fetchLikeValue(nickname),
      fetchLikeValue(telephone),
      startTime ?? 0,
      endTime ?? formatTime(Date.now()),
      pageSize,
      offset,
    ]);
    return result;
  }
  async queryInfo(id) {
    const statement = `SELECT 
            u.id id, 
            u.username username, 
            u.nickname nickname, 
            u.telephone telephone, 
            u.roleId roleId,
            u.state state,
            IF(u.roleId, JSON_OBJECT(
              'id', r.id,
              'roleName', r.roleName, 
              'roleIndex', r.roleIndex, 
              'intro', r.intro
            ), NULL)
            as roleInfo,
            u.departmentId departmentId,
            IF(u.departmentId, JSON_OBJECT(
              'id', dp.id,
              'depName', dp.depName,
              'leader', dp.leader,
              'parentId', dp.parentId,
              'intro', dp.intro
            ), NULL) as departmentInfo,
            u.email email, 
            u.intro intro, 
            u.createAt createAt, 
            u.updateAt updateAt 
     FROM ${this.tbName} u LEFT JOIN roles r ON u.roleId=r.id 
     LEFT JOIN department dp ON dp.id = u.departmentId
     WHERE u.id=?`;
    const [result] = await connection.query(statement, [id]);
    return result[0];
  }
  async queryBaseInfo(id) {
    const statement = `SELECT id, username, roleId,
        departmentId, nickname, telephone, 
        state,
        email, intro, createAt, updateAt 
    FROM ${this.tbName}  WHERE id=?`;
    const [result] = await connection.query(statement, [id]);
    return result[0];
  }
}
const userService = new UserService("user");
module.exports = userService;
