const mongoose = require("mongoose");

const CoffeeShopSchema = new mongoose.Schema({
  name: String,
  location: String,
  products: [
    {
      name: String,
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model("CoffeeShop", CoffeeShopSchema);