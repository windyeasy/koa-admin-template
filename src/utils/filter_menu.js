const { checkArrayNotEmpty } = require("./checkValue");

function filterMenu(ids, menuList) {
  const payload = [];
  for (const menu of menuList) {
    if (checkArrayNotEmpty(menu.children)) {
      menu.children = filterMenu(ids, menu.children);
    }
    if (ids.includes(menu.id)) {
      payload.push(menu);
    }
  }
  return payload;
}
module.exports = {
  filterMenu,
};
