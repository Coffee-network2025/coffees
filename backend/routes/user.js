const express = require("express");
const router = express.Router();
const User = require("../models/User");

// User registration
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = new User({ email, password, name });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;