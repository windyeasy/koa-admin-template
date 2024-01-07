const { UPLOAD_PATH } = require("../config/path");
const { SERVER_HOST_PORT } = require("../config/server");
const fileService = require("../services/file.service");
const { successModel } = require("../utils/request-model");
const fs = require("fs");
class FileController {
  // 头像上传
  async createAvatarFile(ctx, next) {
    // 得到文件上传信息插入数据库
    const { filename, mimetype, size, originalname } = ctx.file;
    console.log(filename);
    const userId = ctx.user.id;
    const result = await fileService.create({
      filename,
      mimetype,
      size,
      originalname,
      userId,
    });

    ctx.body = successModel({
      message: "上传头像成功!",
      data: {
        id: result.insertId,
        path: `${SERVER_HOST_PORT}/pictures/${filename}`,
      },
    });
  }
  async showPicture(ctx) {
    const { filename, mimetype } = ctx.fileInfo;

    // 读取文件
    try {
      const fileReadStream = fs.createReadStream(UPLOAD_PATH + "/" + filename);
      ctx.type = mimetype;
      ctx.body = fileReadStream;
    } catch (err) {
      console.log(err);
      ctx.body = "文件不存在，或者已经被删除请联系管理员";
    }
  }
}

module.exports = new FileController();
