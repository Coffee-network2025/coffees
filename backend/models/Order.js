const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  coffeeShopId: { type: mongoose.Schema.Types.ObjectId, ref: "CoffeeShop", required: true },
  items: [
    {
      name: String,
      quantity: Number,
    },
  ],
  time: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", OrderSchema);