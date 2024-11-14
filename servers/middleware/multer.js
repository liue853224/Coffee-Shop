const multer = require("multer");
const path = require("path");
const tempDir = path.join(__dirname, "servers", "temp");
const upload = multer({ dest: tempDir });
module.exports = upload;
