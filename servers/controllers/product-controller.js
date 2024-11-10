//引入資料庫
const { Product } = require("../models");
//引入helper
const { getPagination, getOffset } = require("../helper/pagination-helper");
// 引入file-helper
const { localFileHandler } = require("../helper/file-helper");
const productController = {
  getAllProducts: (req, res, next) => {
    const { type, roastLevel } = req.query;
    //宣告分頁變數
    const DEFAULT_LIMIT = 9;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || DEFAULT_LIMIT;
    const offset = getOffset(limit, page);
    // 建立條件檢查
    const validTypes = ["coffee-beans", "drip-coffee"];
    const validRoastLevels = ["light", "medium", "dark"];

    // 建立篩選條件物件
    let condition = {};

    // 檢查type是否有效並加入條件篩選物件中
    if (type) {
      if (validTypes.includes(type)) {
        condition.type = type;
      } else {
        return res
          .status(400)
          .json({ status: "error", message: "無效的type參數" });
      }
    }

    // 檢查roastLevel是否有效並加入條件篩選物件中
    if (roastLevel) {
      if (validRoastLevels.includes(roastLevel)) {
        condition.roastLevel = roastLevel;
      } else {
        return res
          .status(400)
          .json({ status: "error", message: "無效的 roastLevel 參數" });
      }
    }

    Product.findAll({
      where: condition,
      limit: limit,
      offset: offset,
    })
      .then((products) => {
        res.status(200).json({
          status: "success",
          data: products,
          pagination: getPagination(limit, page, products.count),
        });
      })
      .catch((err) => next(err));
  },
  getTopProducts: (req, res, next) => {
    Product.findAll({
      order: [["rating", "DESC"]],
      limit: 10,
    })
      .then((topProducts) => {
        if (!topProducts) {
          return res.status(404).json({
            status: "error",
            message: "似乎沒有找到相關的產品...",
          });
        }
        return res.status(200).json({
          status: "success",
          data: topProducts,
        });
      })
      .catch((err) => {
        next(err);
      });
  },
  getProduct: (req, res, next) => {
    const { id } = req.params;
    Product.findByPk(id)
      .then((product) => {
        if (!product) {
          return res.status(404).json({
            status: "error",
            message: "產品不存在",
          });
        }
        return res.status(200).json({
          status: "success",
          data: product,
        });
      })
      .catch((err) => next(err));
  },
  createProduct: (req, res, next) => {
    const { file } = req;
    const {
      name,
      type,
      roastLevel,
      flavor,
      price,
      description,
      rating,
      imageURL,
    } = req.body;
    // 檢查必填欄位
    if (
      [name, type, roastLevel, flavor, price, description].some(
        (param) => !param
      )
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "產品資料不完整，請檢查所有欄位" });
    }
    localFileHandler(file)
      .then((filePath) => {
        Product.create({
          name,
          type,
          roastLevel,
          flavor,
          price,
          description,
          rating,
          imageURL: filePath || null,
        });
      })
      .then((product) =>
        res.status(200).json({
          status: "success",
          data: product,
        })
      )
      .catch((err) => next(err));
  },
  updateProduct: (req, res, next) => {
    const { file } = req;
    const { id } = req.params;
    const {
      name,
      type,
      roastLevel,
      flavor,
      price,
      description,
      rating,
      imageURL,
    } = req.body;

    //檢查必要欄位
    if (
      [name, type, roastLevel, flavor, price, description].some(
        (param) => !param
      )
    ) {
      return res
        .status(400)
        .json({ status: "error", message: "產品資料不完整，請檢查所有欄位" });
    }
    // 更新資料庫與處理file
    Promise.all([Product.findByPk(id), localFileHandler(file)])

      .then(([product, filePath]) => {
        if (!product) {
          return res
            .status(404)
            .json({ status: "error", message: "產品不存在" });
        }
        return product.update({
          name,
          type,
          roastLevel,
          flavor,
          price,
          description,
          rating,
          imageURL: filePath || product.imageURL,
        });
      })
      .then((updatedProduct) => {
        res.status(200).json({ status: "success", data: updatedProduct });
      })
      .catch((err) => next(err));
  },
  deleteProduct: (req, res, next) => {
    const { id } = req.params;
    Product.findByPk(id)
      .then((product) => {
        if (!product) {
          return res
            .status(400)
            .json({ status: "error", message: "找不到產品" });
        }
        return product.destroy();
      })
      .then((deletedProduct) => {
        return res.status(200).json({
          status: "success",
          data: deletedProduct,
        });
      })
      .catch((err) => {
        next(err);
      });
  },
};

module.exports = productController;
