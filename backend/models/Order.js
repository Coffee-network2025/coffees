const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  coffeeShopId: { type: mongoose.Schema.Types.ObjectId, ref: "CoffeeShop", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  status: { type: String, default: "Pending" },
  pickupTime: { type: Date, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);