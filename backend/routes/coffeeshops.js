const express = require("express");
const router = express.Router();
const CoffeeShop = require("../models/CoffeeShop");

// Возвращает список всех кофеен
router.get("/", async (req, res) => {
    try {
        const coffeeShops = await CoffeeShop.find();
        res.status(200).json(coffeeShops);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;