// 引入資料庫
const { User } = require("../models");
// 引入密碼加密套件
const bcrypt = require("bcryptjs");
//加入jwt模組
const jwt = require("jsonwebtoken");

const userController = {
  signUp: (req, res, next) => {
    const { name, email, password, isAdmin } = req.body;
    //確認資料庫連接
    User.sequelize
      .authenticate()
      .then(() => {
        console.log("User資料庫連接成功");
        return User.findOne({ where: { email: email } });
      })
      .then((user) => {
        //驗證輸入的email與資料庫裡的email是否有重複
        if (user) {
          return res.json({ status: "error", message: "信箱已註冊過" });
        }
        return bcrypt.hash(password, 10); //確認過沒有重複email將密碼hash
      })
      .then((hash) => {
        return User.create({
          name: name,
          email: email,
          password: hash,
          isAdmin: isAdmin || false,
        });
      })
      .then((user) => {
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        };
        return res.status(200).json({
          status: "創建成功",
          data: userData,
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
          isAdmin: user.isAdmin,
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
