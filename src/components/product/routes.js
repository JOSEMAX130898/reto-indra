const express = require("express");
const router = express.Router();
const Controller = require("./controller");
const user_auth = require('../../middlewares/auth');

router.get("/", user_auth, Controller.getProductos);
router.post('/', user_auth, Controller.crudProduct);
module.exports = router;