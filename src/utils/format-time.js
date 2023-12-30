const dayjs = require("dayjs");
function formatTime(time, fmt = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(time).format(fmt);
}
module.exports = {
  formatTime,
};
