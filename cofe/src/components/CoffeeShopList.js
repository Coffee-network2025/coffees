import React, { useEffect, useState } from "react";
import { getCoffeeShops } from "../utils/api";

const CoffeeShopList = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    getCoffeeShops().then((data) => setCoffeeShops(data));
  }, []);

  return (
    <div>
      <h2>Our Coffee Shops</h2>
      <ul>
        {coffeeShops.map((shop) => (
          <li key={shop._id}>{shop.name} - {shop.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeShopList;