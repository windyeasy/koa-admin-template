const connection = require("../app/database");
async function queryChildrenList(statement, values) {
  const [list] = await connection.query(statement, values);
  return list;
}
async function childrenQuery(list, statement) {
  for (const info of list) {
    // 查询列表
    const childrenList = await queryChildrenList(statement, [info.id]);
    if (childrenList && childrenList.length) {
      info.children = await childrenQuery(childrenList, statement);
    } else {
      info.children = null;
    }
  }
  return list;
}
module.exports = {
  childrenQuery,
};
