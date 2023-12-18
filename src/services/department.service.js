const connection = require("../app/database");
const BaseService = require("./base.service");

class DepartmentService extends BaseService {
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
const departmentService = new DepartmentService("department");
module.exports = departmentService;
