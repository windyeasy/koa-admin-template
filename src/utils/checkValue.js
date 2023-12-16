function checkValueNotDefined(value) {
  return value === null || value === undefined ? false : true;
}
function checkArrayNotEmpty(value) {
  return Boolean(Array.isArray(value) && value.length);
}
module.exports = {
  checkValueNotDefined,
  checkArrayNotEmpty,
};
