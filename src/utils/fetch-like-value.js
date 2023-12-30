function fetchLikeValue(value) {
  value = value ?? "";
  return `%${value}%`;
}
module.exports = {
  fetchLikeValue,
};
