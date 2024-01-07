const KoaRouter = require("@koa/router");
const { showPicture } = require("../controller/file.controller");
const { verifyFileIsExists } = require("../middleware/file.middleware");

const picturesRouter = new KoaRouter({
  prefix: "/pictures",
});

picturesRouter.get("/:filename", verifyFileIsExists, showPicture);

module.exports = picturesRouter;
