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
}
const menuService = new MenuService("menu");
module.exports = menuService;
