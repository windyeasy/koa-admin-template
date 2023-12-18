function fetchPageInfo(ctx) {
  const { pageSize = 10, page = 1 } = ctx.query;
  const size = Number(pageSize);
  const current = Number(page);
  const offset = (current - 1) * size;
  return {
    size,
    offset,
  };
}

module.exports = {
  fetchPageInfo,
};
