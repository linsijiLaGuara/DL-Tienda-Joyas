const express = require("express");
const {
  get_joyas_controller,
  get_paginated_joyas_controller,
} = require("../controller/controllerJoyas");

const router = express.Router();

router.get("/joyas", get_joyas_controller);
router.get("/obtener", get_paginated_joyas_controller);

module.exports = router;
