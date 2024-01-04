const connection = require("../app/database");
const { childrenQuery } = require("../utils/children-query");
const { fetchLikeValue } = require("../utils/fetch-like-value");
const BaseService = require("./base.service");

class DepartmentService extends BaseService {
  async queryList(depName) {
    if (depName) {
      const statement = `SELECT *
      FROM ${this.tbName} WHERE depName  like ?  ORDER BY sort ASC, createAt DESC`;
      const [result] = await connection.query(statement, [
        fetchLikeValue(depName),
      ]);
      return result;
    }
    const statement = `SELECT *
    FROM ${this.tbName} WHERE parentId IS NULL  ORDER BY sort ASC`;
    const [result] = await connection.query(statement);
    const childrenStatement = `SELECT * FROM ${this.tbName} WHERE parentId=? ORDER BY sort ASC, createAt DESC`;
    const depList = await childrenQuery(result, childrenStatement);
    return depList;
  }
  //   查询角色信息
  async queryInfo(id) {
    const statement = `SELECT *
     FROM ${this.tbName}  WHERE id=?`;
    const [result] = await connection.query(statement, [id]);
    const childrenStatement = `SELECT * FROM ${this.tbName} WHERE parentId=?`;
    const depList = await childrenQuery(result, childrenStatement);
    return depList[0];
  }
  async allList() {
    const statement = `SELECT *
    FROM ${this.tbName} WHERE parentId IS NULL AND state=1  ORDER BY sort ASC`;
    const [result] = await connection.query(statement);
    const childrenStatement = `SELECT * FROM ${this.tbName} WHERE parentId=? and state=1 ORDER BY sort ASC, createAt DESC`;
    const depList = await childrenQuery(result, childrenStatement);
    return depList;
  }
}
const departmentService = new DepartmentService("department");
module.exports = departmentService;
