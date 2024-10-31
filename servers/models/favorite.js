"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {}
  }
  Favorite.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Favorite",
      tableName: "Favorites",
    }
  );
  return Favorite;
};
