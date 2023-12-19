const connection = require("../app/database");
const BaseService = require("./base.service");

class DepartmentService extends BaseService {
  async queryList() {
    const statement = `SELECT *
    FROM ${this.tbName} WHERE parentId IS NULL`;
    const [result] = await connection.query(statement);
    // 后代查询
    const depChildrenQuery = async (list) => {
      for (const info of list) {
        // 查询列表
        const childStatement = `SELECT *
          FROM ${this.tbName} WHERE parentId=?`;
        const [depList] = await connection.query(childStatement, [info.id]);
        if (depList && depList.length) {
          info.children = await depChildrenQuery(depList);
        } else {
          info.children = null;
        }
      }
      return list;
    };
    const depList = await depChildrenQuery(result);
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
