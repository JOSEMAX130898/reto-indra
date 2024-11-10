const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.get("/personas/:page", controller.getPeople);
router.get("/planetas/:page", controller.getPlanets);
module.exports = router;
