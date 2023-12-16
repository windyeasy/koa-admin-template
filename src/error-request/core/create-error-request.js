// 处理错误请求
class CreateErrorRequest {
  constructor(handleError) {
    this.handleError = handleError;
  }
  throw(...args) {
    this.handleError(...args, this.ctx);
  }
}

module.exports = CreateErrorRequest;
