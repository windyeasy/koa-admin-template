const connection = require("../app/database");
const { childrenQuery } = require("../utils/children-query");
const BaseService = require("./base.service");

class DepartmentService extends BaseService {
  async queryList() {
    const statement = `SELECT *
    FROM ${this.tbName} WHERE parentId IS NULL`;
    const [result] = await connection.query(statement);
    const childrenStatement = `SELECT * FROM ${this.tbName} WHERE parentId=?`;
    const depList = await childrenQuery(result, childrenStatement);
    return depList;
  }
  //   查询角色信息
  async queryInfo(id) {
    const statement = `SELECT *
     FROM ${this.tbName}  WHERE id=?`;
    const [result] = await connection.query(statement, [id]);
    return result[0];
  }
}
const departmentService = new DepartmentService("department");
module.exports = departmentService;
