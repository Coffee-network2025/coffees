const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// Подключение переменных окружения
dotenv.config();

// Импорт маршрутов
const userRoutes = require("./routes/users");
const orderRoutes = require("./routes/orders");
const inventoryRoutes = require("./routes/inventory");
const coffeeShopRoutes = require("./routes/coffeeshops");

// Создание экземпляра приложения Express
const app = express();

// Использование CORS и body-parser
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Использование маршрутов
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/coffeeshops", coffeeShopRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));