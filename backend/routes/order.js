const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const CoffeeShop = require("../models/CoffeeShop");

// Create order
router.post("/create", async (req, res) => {
  const { userId, coffeeShopId, items, time, paymentMethod } = req.body;
  try {
    const coffeeShop = await CoffeeShop.findById(coffeeShopId);
    let canFulfill = true;

    // Check availability
    items.forEach(item => {
      const product = coffeeShop.products.find(p => p.name === item.name);
      if (!product || product.quantity < item.quantity) {
        canFulfill = false;
      }
    });

    if (canFulfill) {
      // Deduct inventory
      items.forEach(item => {
        const product = coffeeShop.products.find(p => p.name === item.name);
        product.quantity -= item.quantity;
      });
      await coffeeShop.save();

      // Create order
      const order = new Order({
        userId,
        coffeeShopId,
        items,
        time,
        paymentMethod,
        status: "Pending",
      });
      await order.save();
      res.status(201).send("Order placed successfully");
    } else {
      res.status(400).send("Insufficient inventory for some items");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;