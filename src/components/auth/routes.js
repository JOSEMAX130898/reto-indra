const express = require("express");
const router = express.Router();
const Controller = require("./controller");
//const user_auth = require('../../middlewares/auth');

router.post('/create', Controller.crudUser);
router.post('/login', Controller.loginUser);
module.exports = router;