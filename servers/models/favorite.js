"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      Favorite.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
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
