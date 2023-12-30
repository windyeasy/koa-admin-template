/**
 * 将菜单列表映射ids列表
 * @param menus --菜单列表--
 * @returns {number[]} 返回ids数组
 */
function mapMenusToIds(menus) {
  const ids = [];
  function recursion(list) {
    for (const item of list) {
      if (item.children && item.children.length) {
        recursion(item.children);
      } else {
        ids.push(item.id);
      }
    }
  }
  recursion(menus);
  return ids;
}
module.exports = {
  mapMenusToIds,
};
