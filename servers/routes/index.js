const express = require("express");
const router = express.Router();
const apiRoutes = require("./apis");

router.use("/", apiRoutes);

module.exports = router;
