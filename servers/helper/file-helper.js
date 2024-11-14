const fs = require("fs"); // 引入 fs 模組
const path = require("path"); // 引入 path 模組
const localFileHandler = (file) => {
  // file 是 multer 處理完的檔案
  return new Promise((resolve, reject) => {
    if (!file) return resolve(null);
    const uploadDir = path.join(__dirname, "..", "upload");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const fileName = path.join(uploadDir, file.originalname); // 使用絕對路徑    return fs.promises
    return fs.promises
      .readFile(file.path)
      .then((data) => fs.promises.writeFile(fileName, data))
      .then(() => resolve(`/upload/${file.originalname}`))
      .catch((err) => reject(err));
  });
};
module.exports = {
  localFileHandler,
};
