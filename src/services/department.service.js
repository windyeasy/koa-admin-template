const connection = require("../app/database");
const BaseService = require("./base.service");

class DepartmentService extends BaseService {}
const departmentService = new DepartmentService("department");
module.exports = departmentService;
