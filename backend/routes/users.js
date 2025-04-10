const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Регистрация пользователя
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const newUser = new User({ email, password, name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;