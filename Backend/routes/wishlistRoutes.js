const express = require("express");
const Wishlist = require("../models/Wishlist");
const jwt = require("jsonwebtoken");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware to authenticate the user
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id; // Add userId to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Get todos for the logged-in user
router.get("/", authenticate, async (req, res) => {
  try {
    const wishlist = await Todo.find({ userId: req.userId });
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new todo
router.post("/", authenticate, async (req, res) => {
  const wishlist = new Wishlist({
    text: req.body.text,
    userId: req.userId, // Associate todo with the logged-in user
  });
  try {
    const newwishlist = await wishlist.save();
    res.status(201).json(newwishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo
router.put("/:id", authenticate, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId }, // Ensure the todo belongs to the logged-in user
      { completed: req.body.completed },
      { new: true }
    );
    if (!wishlist) {
      return res.status(404).json({ message: "wishlist not found" });
    }
    res.json(wishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const todo = await wishlist.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId, // Ensure the todo belongs to the logged-in user
    });
    if (!wishlist) {
      return res.status(404).json({ message: "wishlist not found" });
    }
    res.json({ message: "wishlist deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
