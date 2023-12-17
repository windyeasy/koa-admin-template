const connection = require("../app/database");

class BaseService {
  async remove(tbName, id) {
    const statement = `DELETE FROM ${tbName} WHERE id=?`;
    const [result] = await connection.query(statement, [id]);
    return result;
  }
}
const baseService = new BaseService();
module.exports = {
  baseService,
  BaseService,
};
