// 引入資料庫
const db = require("../models");
const { User } = db;
// 引入密碼加密套件
const bcrypt = require("bcryptjs");
//加入jwt模組
const jwt = require("jsonwebtoken");

const userController = {
  signUp: (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        //驗證輸入的email與資料庫裡的email是否有重複
        if (user) {
          throw new Error("email已註冊過");
        }
        return bcrypt.hash(req.body.password, 10); //確認過沒有重複email將密碼hash
      })
      .then((hash) => {
        return User.create({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });
      })
      .then((user) => {
        return res.status(200).json({
          status: "success",
          data: user,
        });
      })
      .catch((err) => next(err));
  },
  signIn: (req, res, next) => {
    const { email, password } = req.body;

    // 確保 email 和 password 不為 undefined 或 null
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "信箱與密碼是必要輸入的資訊" });
    }

    User.findOne({ where: { email } })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "使用者不存在" });
        }

        // 檢查密碼
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "信箱或密碼錯誤" });
        }

        // 創建 JWT
        const payload = { id: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        const userData = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
        return res.json({
          message: "登入成功",
          data: { token, user: userData },
        });
      })
      .catch((err) => {
        console.error("登入時發生某些錯誤:", err);
        next(err);
      });
  },
};

module.exports = userController;
