const connection = require("../app/database");
const { childrenQuery } = require("../utils/children-query");
const BaseService = require("./base.service");

class MenuService extends BaseService {
  async queryList() {
    const statement = `SELECT *   FROM ${this.tbName} WHERE parentId IS NULL ORDER BY sort ASC`;
    const [result] = await connection.query(statement, []);
    const childrenStatement = `SELECT * FROM ${this.tbName} WHERE parentId=? ORDER BY sort ASC`;
    const menuList = await childrenQuery(result, childrenStatement);
    return menuList;
  }
  // 判断菜单ids是否有不存在的id
  async checkIdsNotIsExits(ids) {
    const length = ids.length;
    const statement = `select count(*) count from ${
      this.tbName
    } where id in (${ids.join()});`;
    const [result] = await connection.query(statement, []);
    return result[0].count === length ? false : true;
  }
}
const menuService = new MenuService("menu");
module.exports = menuService;
