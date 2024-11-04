const { Favorite, Product } = require("../models");

const favoriteController = {
  getFavorites: (req, res, next) => {
    const userId = req.user.id;
    Favorite.findAll({
      where: { userId },
      include: [{ model: Product, as: "product" }],
    })
      .then((favorite) => {
        res.status(200).json({
          message: "收藏產品清單",
          data: favorite,
        });
      })
      .catch((err) => next(err));
  },
  addFavorite: (req, res, next) => {
    const userId = req.user.id;
    const { productId } = req.body;
    if (!productId) {
      return res
        .status(400)
        .json({ status: "error", message: "productId不存在" });
    }
    Favorite.findOne({
      where: {
        userId,
        productId,
      },
    })
      .then((existingFavorite) => {
        if (existingFavorite) {
          return res
            .status(409)
            .json({ status: "error", message: "已經加入最愛了" });
        }
        return Favorite.create({ userId, productId }).then((favorited) => {
          res.status(201).json({
            status: "success",
            message: "新增成功",
            data: favorited,
          });
        });
      })
      .catch((err) => {
        next(err);
      });
  },
  removeFavorite: (req, res, next) => {
    const userId = req.user.id;
    const productId = req.params.id;
    if (!productId) {
      return res
        .status(400)
        .json({ status: "error", message: "productId不存在" });
    }
    Favorite.destroy({ where: { userId, productId } })
      .then((deletedFavorite) => {
        if (deletedFavorite === 0) {
          return res
            .status(404)
            .json({ status: "error", message: "找不到喜愛項目" });
        }
        return res.status(200).json({
          status: "success",
          message: `用戶${userId}將產品${productId}移除最愛`,
        });
      })
      .catch((err) => next(err));
  },
};

module.exports = favoriteController;
