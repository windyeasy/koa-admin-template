const dotenv = require("dotenv");

dotenv.config();
const { SERVER_HOST, SERVER_PORT } = process.env;
const SERVER_HOST_PORT = SERVER_HOST + ":" + SERVER_PORT;
module.exports = { SERVER_HOST, SERVER_PORT, SERVER_HOST_PORT };
