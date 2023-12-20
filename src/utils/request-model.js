class RequestModel {
  successModel(messageInfo) {
    if (typeof messageInfo === "string") {
      return {
        code: 0,
        message: messageInfo,
      };
    } else {
      return {
        code: 0,
        ...messageInfo,
      };
    }
  }
}
module.exports = new RequestModel();
