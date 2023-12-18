const connection = require("../app/database");
const { parseUpdatePayload } = require("../utils/parse-update-payload");

class BaseService {
  constructor(tbName) {
    this.tbName = tbName;
  }

  //   用户创建
  async create(payload) {
    const statement = `INSERT INTO ${this.tbName} SET ?`;
    const [result] = await connection.query(statement, payload);
    return result;
  }
  //   用户删除
  async remove(id) {
    const statement = `DELETE FROM ${this.tbName} WHERE id=?`;
    const [result] = await connection.query(statement, [id]);
    return result;
  }
  //   用户更新
  async update(id, payload) {
    const { statement: setStatement, values } = parseUpdatePayload(payload);
    const statement = `UPDATE ${this.tbName} SET ${setStatement}  WHERE id=?`;
    const [result] = await connection.query(statement, [...values, id]);
    return result;
  }
  // 获取total
  async fetchTotal() {
    const statement = `SELECT count(*) total FROM  ${this.tbName}`;
    const [result] = await connection.query(statement, []);
    return result[0].total;
  }
}

module.exports = BaseService;
