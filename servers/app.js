// 加入環境變數
require("dotenv").config();
// 載入express、設置port、設置body parser
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
//引入passport
const passport = require("./config/passport");
// 設置node內建path模組
const path = require("path");
// 使用 body-parser 中間件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 使用passport
app.use(passport.initialize());
// 引入API路由
const apiRoutes = require("./routes");
// 使用API路由
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
