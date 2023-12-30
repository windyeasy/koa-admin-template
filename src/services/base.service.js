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
  async fetchTotal(lastStatement = "", ...args) {
    const statement = `SELECT count(*) total FROM  ${this.tbName} ${lastStatement}`;
    const [result] = await connection.query(statement, [...args]);
    return result[0].total;
  }
  /**
   * 通过key与value查询字段
   * @param { {key: string, value: any} } payload
   * @returns {any[]}
   */
  async queryDataByKeyValue(payload) {
    const statement = `SELECT * FROM ${this.tbName} WHERE ${payload.key}=?`;
    const [result] = await connection.execute(statement, [payload.value]);
    return result;
  }
  /**
   * 通过key与value判断值是否存在
   * @param { {key: string, value: any} } payload
   * @returns { boolean}
   */
  async checkIsExitsByKeyValue(payload) {
    const [result] = await this.queryDataByKeyValue(payload);
    return !!result.length;
  }
}

module.exports = BaseService;
