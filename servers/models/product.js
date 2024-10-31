"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.User, {
        through: "Favorite",
        foreignKey: "productId",
        as: "favoritedUsers",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        values: ["coffee-beans", "drip-coffee"],
        allowNull: false,
      },
      roastLevel: {
        type: DataTypes.ENUM,
        values: ["light", "medium", "dark"],
        allowNull: false,
      },
      flavor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "Products",
    }
  );
  return Product;
};
