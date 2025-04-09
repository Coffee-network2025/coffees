import React, { useState } from "react";
import { updateInventory } from "../utils/api";

const AdminPanel = () => {
  const [inventory, setInventory] = useState([]);

  const handleUpdate = async () => {
    const response = await updateInventory(inventory);
    if (response.success) {
      alert("Inventory updated successfully!");
    } else {
      alert("Failed to update inventory.");
    }
  };

  return (
    <div>
      <h2>Manage Inventory</h2>
      <textarea
        value={JSON.stringify(inventory, null, 2)}
        onChange={(e) => setInventory(JSON.parse(e.target.value))}
        rows="10"
        cols="50"
      />
      <br />
      <button onClick={handleUpdate}>Update Inventory</button>
    </div>
  );
};

export default AdminPanel;