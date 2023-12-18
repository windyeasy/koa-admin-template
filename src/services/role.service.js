const connection = require("../app/database");
const BaseService = require("./base.service");

class RoleService extends BaseService {
  // 通过角色名判断角色是否已经存在
  async checkRoleExistsByRoleName(roleName) {
    const result = await this.queryDataByKeyValue({
      key: "roleName",
      value: roleName,
    });
    return !!result.length;
  }
  //   通过角色索引判断角色是否已经存在
  async checkRoleExistsByRoleIndex(roleIndex) {
    const result = await this.queryDataByKeyValue({
      key: "roleIndex",
      value: roleIndex,
    });
    return !!result.length;
  }
  // 查询角色列表
  async queryList(offset, pageSize) {
    const statement = `SELECT *
    FROM ${this.tbName}  LIMIT ? OFFSET ?`;
    const [result] = await connection.query(statement, [pageSize, offset]);
    return result;
  }
  //   查询角色信息
  async queryInfo(id) {
    const statement = `SELECT *
     FROM ${this.tbName}  WHERE id=?`;
    const [result] = await connection.query(statement, [id]);
    return result[0];
  }
}
const roleService = new RoleService("roles");
module.exports = roleService;
