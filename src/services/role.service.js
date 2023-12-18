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
}
const roleService = new RoleService("roles");
module.exports = roleService;
