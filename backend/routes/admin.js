const express = require("express");
const router = express.Router();
const CoffeeShop = require("../models/CoffeeShop");
const Order = require("../models/Order");

// Update product inventory
router.post("/update-inventory", async (req, res) => {
  const { coffeeShopId, products } = req.body;
  try {
    const coffeeShop = await CoffeeShop.findById(coffeeShopId);
    coffeeShop.products = products;
    await coffeeShop.save();
    res.status(200).send("Inventory updated successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Mark order as ready
router.post("/mark-ready", async (req, res) => {
  const { orderId } = req.body;
  try {
    const order = await Order.findById(orderId);
    order.status = "Ready";
    await order.save();
    res.status(200).send("Order marked as ready");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;