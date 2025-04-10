const express = require("express");
const router = express.Router();
const CoffeeShop = require("../models/CoffeeShop");

// Добавление продукта в инвентарь
router.post("/:id/add-product", async (req, res) => {
  const { id } = req.params;
  const { productId, quantity } = req.body;

  try {
    const coffeeShop = await CoffeeShop.findById(id);
    if (!coffeeShop) return res.status(404).json({ error: "Coffee shop not found" });

    coffeeShop.inventory.push({ productId, quantity });
    await coffeeShop.save();
    res.status(200).json(coffeeShop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;