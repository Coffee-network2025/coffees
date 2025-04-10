const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Обработчик для favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Маршрут для API
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});