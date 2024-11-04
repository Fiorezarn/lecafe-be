const express = require("express");
const router = express.Router();
const {
  addToCart,
  findCartByUserId,
  deleteCart,
} = require("../controllers/cart.controller");

router.post("/", addToCart);
router.get("/:id", findCartByUserId);
router.delete("/", deleteCart);
module.exports = router;
