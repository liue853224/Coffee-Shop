//引入資料庫
const { Product } = require("../models");

const productController = {
  getAllProducts: (req, res, next) => {
    const { type, roastLevel } = req.query;
    // 建立條件檢查
    const validTypes = ["coffee-beans", "drip-coffee"];
    const validRoastLevels = ["light", "medium", "dark"];

    // 建立篩選條件物件
    let whereCondition = {};

    // 檢查type是否有效並加入條件篩選物件中
    if (type) {
      if (validTypes.includes(type)) {
        whereCondition.type = type;
      } else {
        return res
          .status(400)
          .json({ status: "error", message: "無效的type參數" });
      }
    }

    // 檢查roastLevel是否有效並加入條件篩選物件中
    if (roastLevel) {
      if (validRoastLevels.includes(roastLevel)) {
        whereCondition.roastLevel = roastLevel;
      } else {
        return res
          .status(400)
          .json({ status: "error", message: "無效的 roastLevel 參數" });
      }
    }

    Product.findAll({ where: whereCondition })
      .then((products) => {
        res.status(200).json({
          status: "success",
          data: products,
        });
      })
      .catch((err) => next(err));
  },
  getProduct: (req, res, next) => {
    Product.findByPk(req.params.id)
      .then((product) => {
        if (!product) {
          return res.status(404).json({
            status: "error",
            message: "Product didn't exist",
          });
        }
        return res.status(200).json({
          status: "success",
          data: product,
        });
      })
      .catch((err) => next(err));
  },
};

module.exports = productController;
