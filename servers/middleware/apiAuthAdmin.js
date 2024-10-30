const authAdmin = (req, res, next) => {
  const user = req.user; //若通過JWT驗證,這裡的req.user已包含登入者的資訊
  if (!user || !user.isAdmin) {
    return res.status(403).json({
      message: "權限不足,無法新增產品",
    });
  }
  next();
};

module.exports = authAdmin;
