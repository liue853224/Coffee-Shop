const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/apiAuth");

// 引入控制器
const userController = require("../../controllers/user-controller");
const productController = require("../../controllers/product-controller");
//product routes
router.get("/products/:id", productController.getProduct);
router.put("/products/:id", productController.updateProduct);
router.get("/products", productController.getAllProducts);
router.post("/products", productController.createProduct);

// register route
router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);

module.exports = router;
