// 用户名或密码为空
const USERNAME_OR_PASSWORD_NOT_NULL = "username_or_password_not_null";
// 字段不能为空
const FIELD_NOT_NULL = "field_not_null";
// 字段必填
const USER_ALREADY_EXISTS = "user_already_exists";
// 用户名或密码错误
const USERNAME_OR_PASSWORD_ERROR = "username_or_password_error";
// 数据库中的字段的值已经被使用
const IS_EXISTS = "is_exists";
// 异步选择时，使用数据库中，值数据库中不存在该值
const IS_NOT_EXISTS = "is_not_exists";
// 菜单id不存在
const MENU_ID_NOT_EXISTS = "menu_id_not_exists";
module.exports = {
  USERNAME_OR_PASSWORD_NOT_NULL,
  FIELD_NOT_NULL,
  USER_ALREADY_EXISTS,
  USERNAME_OR_PASSWORD_ERROR,
  IS_EXISTS,
  IS_NOT_EXISTS,
  MENU_ID_NOT_EXISTS,
};
