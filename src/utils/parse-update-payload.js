//   解析payload生成更新字符串
function parseUpdatePayload(payload) {
  const statements = [];
  const values = [];
  const keys = Object.keys(payload);
  for (const key of keys) {
    values.push(payload[key]);
    statements.push(`${key}=?`);
  }
  return {
    statement: statements.join(),
    values,
  };
}
module.exports = {
  parseUpdatePayload,
};
