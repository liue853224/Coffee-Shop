const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/apiAuth");

// 引入控制器
const userController = require("../../controllers/user-controller");
const productController = require("../../controllers/product-controller");
//product routes
router.get("/products/top", productController.getTopProducts);
router.get("/products/:id", productController.getProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.get("/products", productController.getAllProducts);
router.post("/products", productController.createProduct);

// register route
router.post("/signup", userController.signUp);
router.post("/signin", authenticate, userController.signIn);

module.exports = router;
