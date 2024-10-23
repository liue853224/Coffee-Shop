const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");
const authenticate = require("../../middleware/apiAuth");

// 引入控制器
const userController = require("../../controllers/user-controller");

// 註冊路由
router.post("/signup", userController.signUp);

module.exports = router;
