const connection = require("../app/database");
const BaseService = require("./base.service");

class FileService extends BaseService {}
const fileService = new FileService("file");
module.exports = fileService;
