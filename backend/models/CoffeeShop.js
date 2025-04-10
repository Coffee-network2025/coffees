const mongoose = require("mongoose");

const CoffeeShopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  inventory: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("CoffeeShop", CoffeeShopSchema);