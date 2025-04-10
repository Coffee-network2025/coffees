const BASE_URL = "http://localhost:5000/api";

export const getCoffeeShops = async () => {
  const response = await fetch(`${BASE_URL}/coffee_shops`);
  return response.json();
};

export const placeOrder = async (order) => {
  const response = await fetch(`${BASE_URL}/order/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  return response.json();
};

export const updateInventory = async (inventory) => {
  const response = await fetch(`${BASE_URL}/admin/update-inventory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products: inventory }),
  });
  return response.json();
};