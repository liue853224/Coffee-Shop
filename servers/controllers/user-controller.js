// 引入資料庫
const db = require("../models");
const { User } = db;
// 引入密碼加密套件
const bcrypt = require("bcryptjs");

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
};

module.exports = userController;
