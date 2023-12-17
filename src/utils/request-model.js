class RequestModel {
  successModel(messageInfo) {
    if (typeof messageInfo === "string") {
      return {
        code: 0,
        messageInfo,
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
