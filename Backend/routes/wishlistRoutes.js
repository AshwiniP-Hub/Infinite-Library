const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist'); // Import Wishlist model
const Book = require('../models/Book'); // Import Book model

// Add a book to the wishlist
const mongoose = require('mongoose'); // Import mongoose

router.post("/wishlist", async (req, res) => {
    const { bookId } = req.body; // Expecting `bookId` as a string
    try {
        // Validate Book ID
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).json({ error: "Invalid Book ID" });
        }

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

        // Check if the book is already in the wishlist
        if (wishlist.books.includes(book._id)) {
            return res.status(400).json({ message: "Book is already in the wishlist" });
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

// Delete a book from the wishlist
router.delete("/wishlist", async (req, res) => {
    const { bookId } = req.body; // Expecting `bookId` as a string
    try {
        // Validate Book ID
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(400).json({ error: "Invalid Book ID" });
        }

        const bookObjectId = new mongoose.Types.ObjectId(bookId);

        // Find the wishlist
        let wishlist = await Wishlist.findOne();
        if (!wishlist) {
            return res.status(404).json({ error: "Wishlist not found" });
        }

        // Check if the book is in the wishlist
        const bookIndex = wishlist.books.indexOf(bookObjectId);
        if (bookIndex === -1) {
            return res.status(404).json({ error: "Book not found in wishlist" });
        }

        // Remove the book from the wishlist
        wishlist.books.splice(bookIndex, 1);
        await wishlist.save();

        res.status(200).json(wishlist);
    } catch (error) {
        console.error("Error deleting book from wishlist:", error.message); // Log the error for debugging
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;
