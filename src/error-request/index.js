const CreateErrorRequest = require("./core/create-error-request");
const {
  USERNAME_OR_PASSWORD_NOT_NULL,
  FIELD_NOT_NULL,
  USER_ALREADY_EXISTS,
  USERNAME_OR_PASSWORD_ERROR,
  IS_EXISTS,
  IS_NOT_EXISTS,
  MENU_ID_NOT_EXISTS,
} = require("./error-type");

function handleError(err, ctx, fieldName = "") {
  let message = "";
  let code = 0;
  switch (err) {
    case USERNAME_OR_PASSWORD_NOT_NULL:
      code = -1001;
      message = "用户名或密码不能为空~";
      break;
    case FIELD_NOT_NULL:
      code = -1002;
      message = `${fieldName}字段不能为空！`;
      break;
    case USER_ALREADY_EXISTS:
      code = -1003;
      message = `用户已占用！`;
      break;
    case USERNAME_OR_PASSWORD_ERROR:
      code = -1004;
      message = `用户名或密码错误，或用户已禁用！`;
      break;
    case IS_EXISTS:
      code = -1004;
      message = `${fieldName}已占用`;
      break;
    case IS_NOT_EXISTS:
      code = -1005;
      message = `${fieldName}不存在`;
      break;

    case MENU_ID_NOT_EXISTS:
      code = -3301;
      message = "menuList里有id不存在，请检查后重新提交";
      break;
  }
  ctx.body = {
    code,
    message,
  };
}

const errorRequest = new CreateErrorRequest(handleError);

module.exports = errorRequest;
