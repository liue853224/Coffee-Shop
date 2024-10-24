//引入資料庫
const { Product } = require("../models");

const productController = {
  getAllProducts: (req, res, next) => {
    Product.findAll()
      .then((products) => {
        res.status(200).json({
          status: "success",
          data: products,
        });
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        next(err);
      });
  },
};

module.exports = productController;
