const express = require("express")
const router = express.Router();

const authRouter = require("../components/auth/routes");
const productRouter = require("../components/product/routes");
const swapiRouter = require("../components/swapi/router");

router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/swapi", swapiRouter);

module.exports = router;
