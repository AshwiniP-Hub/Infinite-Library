const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist'); // Import Wishlist model
const Book = require('../models/Book'); // Import Book model

// Add a book to the wishlist
const mongoose = require('mongoose'); // Import mongoose

router.post("/wishlist", async (req, res) => {
    const { bookId } = req.body; // Expecting `bookId` as a string

    try {
        // Convert bookId to ObjectId
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).json({ error: "Invalid Book ID" });
        }

        // const bookObjectId = mongoose.Types.ObjectId(bookId);
        const bookObjectId = new mongoose.Types.ObjectId(bookId);
        // Check if the book exists in the database
        const book = await Book.findById(bookObjectId);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        // Find the wishlist or create a new one
        let wishlist = await Wishlist.findOne();
        if (!wishlist) {
            wishlist = new Wishlist({ books: [] });
        }

        // Add the book's ObjectId to the wishlist
        wishlist.books.push(book._id);
        await wishlist.save();

        res.status(200).json(wishlist);
    } catch (error) {
        console.error("Error adding book to wishlist:", error.message); // Log the error for debugging
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get the wishlist
router.get("/wishlist", async (req, res) => {
    try {
        // Populate the books in the wishlist to get detailed book information
        const wishlist = await Wishlist.findOne().populate('books');
        res.status(200).json(wishlist || { books: [] });
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
