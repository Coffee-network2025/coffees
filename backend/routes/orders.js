const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Product = require("../models/Product");

// Создание заказа
router.post("/", async (req, res) => {
  const { userId, coffeeShopId, items, pickupTime } = req.body;
  try {
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) return res.status(404).json({ error: "Product not found" });
    }
    const newOrder = new Order({ userId, coffeeShopId, items, pickupTime });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;