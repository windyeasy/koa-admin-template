const fs = require("fs");
const path = require("path");

const privateKey = fs.readFileSync(
  path.resolve(__dirname, "./keys/private.key")
);
const publicKey = fs.readFileSync(path.resolve(__dirname, "./keys/public.key"));

module.exports = {
  privateKey,
  publicKey,
};
