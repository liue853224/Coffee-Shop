const { Favorite } = require("../models");

const favoriteController = {
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
            .json({ status: "errror", message: "已經加入最愛了" });
        }
        return Favorite.create({ userId, productId }).then((favorited) => {
          res.status(201).json({
            status: "success",
            data: favorited,
          });
        });
      })
      .catch((err) => {
        console.error("Error adding favorite:", err);
        next(err);
      });
  },
};

module.exports = favoriteController;
