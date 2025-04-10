const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: Map, of: Number }, // Ингредиенты и их количество
  coffeeShopId: { type: mongoose.Schema.Types.ObjectId, ref: "CoffeeShop" },
});

module.exports = mongoose.model("Product", ProductSchema);