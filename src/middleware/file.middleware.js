const multer = require("@koa/multer");
const { UPLOAD_PATH } = require("../config/path");
const errorRequest = require("../error-request");
const { FIELD_NOT_NULL } = require("../error-request/error-type");
const fileService = require("../services/file.service");

/**
 * 通过对multer配置生成，头像文件上传中间件
 */
const uploadAvatar = multer({
  storage: multer.diskStorage({
    // 设置文件存储路径
    destination(req, file, callback) {
      callback(null, UPLOAD_PATH);
    },
    // 设置文件名称
    filename(_, file, callback) {
      callback(null, Date.now() + "_" + file.originalname);
    },
  }),
});
const avatarHandler = uploadAvatar.single("avatar");

/**
 * 单文件上传，验证文件字段是否传入
 */
const verifySingleFile = (fieldName) => {
  return async (ctx, next) => {
    const file = ctx.file;
    if (!file || !file.filename) {
      return errorRequest.throw(FIELD_NOT_NULL, ctx, fieldName);
    }
    await next();
  };
};

/**
 * 验证文件是否存在于数据库中，没有就不展示
 */
async function verifyFileIsExists(ctx, next) {
  const { filename } = ctx.params;
  const fileList = await fileService.queryDataByKeyValue({
    key: "filename",
    value: filename,
  });
  const fileInfo = fileList[0];
  if (!fileInfo || !fileInfo.filename) {
    return;
  }

  ctx.fileInfo = fileInfo;
  await next();
}

module.exports = {
  avatarHandler,
  verifySingleFile,
  verifyFileIsExists,
};
