const connection = require("../app/database");
const { checkArrayNotEmpty } = require("../utils/checkValue");
const { filterMenu } = require("../utils/filter_menu");
const BaseService = require("./base.service");
const menuService = require("./menu.service");

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
    const statement = `SELECT 
      r.id id, 
      r.roleName roleName,
      r.roleIndex roleIndex,
      r.sort sort,
      r.state state,
      r.intro intro,
      r.createAt createAt,
      r.updateAt createAt,
      (SELECT 
          JSON_ARRAYAGG(rm.menuId) 
        FROM role_select_menu rm where r.id=rm.roleId
        GROUP BY rm.roleId) menuList 
    FROM ${this.tbName} r  ORDER BY sort ASC LIMIT ? OFFSET ?`;
    const [result] = await connection.query(statement, [pageSize, offset]);
    return result;
  }
  //   查询角色信息
  async queryInfo(id) {
    const statement = `SELECT 
      r.id id, 
      r.roleName roleName,
      r.roleIndex roleIndex,
      r.sort sort,
      r.state state,
      r.intro intro,
      r.createAt createAt,
      r.updateAt createAt,
      (SELECT 
          JSON_ARRAYAGG(rm.menuId) 
        FROM role_select_menu rm where r.id=rm.roleId
        GROUP BY rm.roleId) menuList 
     FROM ${this.tbName} r  WHERE id=?`;
    const [result] = await connection.query(statement, [id]);
    return result[0];
  }
  // 检测当前角色是否已经存在菜单
  async hasMenu(menuId, roleId) {
    const statement =
      "SELECT * FROM role_select_menu WHERE menuId=? AND roleId=?";
    const [result] = await connection.execute(statement, [menuId, roleId]);
    return !!result.length;
  }
  // 角色添加菜单
  async addMenu(menuId, roleId) {
    const statement =
      "INSERT INTO role_select_menu(menuId, roleId) VALUES(?,?)";
    const [result] = await connection.execute(statement, [menuId, roleId]);
    return result;
  }
  // 为角色更新菜单
  async updateMenus(menuList, roleId) {
    // 删除原有菜单信息
    const delStatement = "DELETE FROM role_select_menu WHERE roleId=?";
    await connection.query(delStatement, [roleId]);
    for (const menuId of menuList) {
      await this.addMenu(menuId, roleId);
    }
  }
  // 通过角色id获取菜单列表
  async queryMenuListByRoleId(roleId) {
    const statement = `
    SELECT rm.roleId roleId, 
      JSON_ARRAYAGG(rm.menuId) menuIds 
    FROM role_select_menu rm WHERE rm.roleId = ? 
    GROUP BY rm.roleId;
    `;
    const [result] = await connection.query(statement, [roleId]);
    const menuIds = result[0] ? result[0].menuIds : [];
    if (checkArrayNotEmpty(menuIds)) {
      const menuList = await menuService.queryList();
      // 过滤掉不在menuIds的菜单
      return filterMenu(menuIds, menuList);
    } else {
      return null;
    }
  }
}
const roleService = new RoleService("roles");
module.exports = roleService;
