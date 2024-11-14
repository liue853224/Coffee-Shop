const express = require("express");
const router = express.Router();

//引入middleware
const authenticate = require("../../middleware/apiAuth");
const authAdmin = require("../../middleware/apiAuthAdmin");

// 引入控制器
const userController = require("../../controllers/user-controller");
const productController = require("../../controllers/product-controller");
const favoriteController = require("../../controllers/favorite-controller");
// 引入middleware
const upload = require("../../middleware/multer");

//admin routes
router.get(
  "/admin/products",
  authenticate,
  authAdmin,
  productController.getAllProducts
);
router.post(
  "/admin/products",
  authenticate,
  authAdmin,
  upload.single("image"),
  productController.createProduct
);
router.put(
  "/admin/products/:id",
  authenticate,
  authAdmin,
  upload.single("image"),
  productController.updateProduct
);
router.delete(
  "/admin/products/:id",
  authenticate,
  authAdmin,
  productController.deleteProduct
);

//product routes
router.get("/products/top", productController.getTopProducts);
router.get("/products/:id", productController.getProduct);
router.get("/products", productController.getAllProducts);

//favorite routes
router.delete("/favorite/:id", authenticate, favoriteController.removeFavorite);
router.get("/favorite", authenticate, favoriteController.getFavorites);
router.post("/favorite", authenticate, favoriteController.addFavorite);

// user routes
router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);

module.exports = router;
