function parseParams(requestBodyKeys, ctx) {
  const info = {};
  for (key of requestBodyKeys) {
    info[key] = ctx.request.body[key];
  }
  return info;
}
module.exports = {
  parseParams,
};
