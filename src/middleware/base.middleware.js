const { baseService } = require("../services/base.service");
const { successModel } = require("../utils/request-model");

function remove(tbName, message = "删除成功") {
  return async function (ctx) {
    const { id } = ctx.params;
    await baseService.remove(tbName, id);
    ctx.body = successModel(message);
  };
}

module.exports = {
  remove,
};
