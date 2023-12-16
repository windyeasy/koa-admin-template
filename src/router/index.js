const readFiles = require("../utils/read-files");

function registerRouter(app) {
  const files = readFiles(__dirname);
  for (const file of files) {
    if (!file.endsWith(".router.js")) continue;
    const router = require(file);
    app.use(router.routes());
    app.use(router.allowedMethods());
  }
}

module.exports = registerRouter;
