const CreateErrorRequest = require("./core/create-error-request");
const {
  USERNAME_OR_PASSWORD_NOT_NULL,
  FIELD_NOT_NULL,
  USER_ALREADY_EXISTS,
  USERNAME_OR_PASSWORD_ERROR,
} = require("./error-type");

function handleError(err, ctx, fieldName = "") {
  let message = "";
  let code = 0;
  switch (err) {
    case USERNAME_OR_PASSWORD_NOT_NULL:
      code = "-1001";
      message = "用户名或密码不能为空~";
      break;
    case FIELD_NOT_NULL:
      code = "-1002";
      message = `${fieldName}字段不能为空！`;
      break;
    case USER_ALREADY_EXISTS:
      code = "-1003";
      message = `用户已存在！`;
      break;
    case USERNAME_OR_PASSWORD_ERROR:
      code = "-1004";
      message = `用户名或密码错误！`;
      break;
  }
  ctx.body = {
    code,
    message,
  };
}

const errorRequest = new CreateErrorRequest(handleError);

module.exports = errorRequest;
