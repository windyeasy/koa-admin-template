const connection = require("./app/database");

const firstDepListJson = [
  {
    parentId: 11,
    depName: "破事部",
  },
  {
    parentId: 11,
    depName: "测试部",
  },
  {
    parentId: 12,
    depName: "型测部",
  },
];

const statement = `INSERT INTO department SET ?`;
for (const data of firstDepListJson) {
  connection.query(statement, [data]);
}
