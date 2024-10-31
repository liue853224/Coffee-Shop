const { Favorite } = require("../models");

const favoriteController = {
  addFavorite: (req, res, next) => {
    const { productId } = req.body;
    Favorite.create({ userId: req.user.id, productId })
      .then((favorited) => {
        res.status(201).json({
          status: "success",
          data: favorited,
        });
      })
      .catch((err) => {
        console.error("Error adding favorite:", err);
        next(err);
      });
  },
};

module.exports = favoriteController;
