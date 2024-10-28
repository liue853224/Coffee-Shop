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
