import React, { useState } from "react";
import { placeOrder } from "../utils/api";

const OrderForm = () => {
  const [order, setOrder] = useState({
    coffeeShopId: "",
    items: [],
    time: "",
    paymentMethod: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await placeOrder(order);
    if (response.success) {
      alert("Order placed successfully!");
    } else {
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Coffee Shop ID:
        <input
          type="text"
          value={order.coffeeShopId}
          onChange={(e) => setOrder({ ...order, coffeeShopId: e.target.value })}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="text"
          value={order.time}
          onChange={(e) => setOrder({ ...order, time: e.target.value })}
        />
      </label>
      <br />
      <label>
        Payment Method:
        <select
          value={order.paymentMethod}
          onChange={(e) =>
            setOrder({ ...order, paymentMethod: e.target.value })
          }
        >
          <option value="card">Card</option>
          <option value="cash">Cash</option>
        </select>
      </label>
      <br />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;