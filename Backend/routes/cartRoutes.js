const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Book = require('../models/Book'); 

// Add a book to the cart
router.post('/add', async (req, res) => {
    console.log('Request Body:', req.body); // Add this for debugging
  const { userId, book } = req.body;

 // Validate input
 if (!userId || !book || !book.bookId) {
    return res.status(400).json({ success: false, error: 'Invalid request data' });
  }

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart for the user
      cart = new Cart({ userId, books: [book] });
    } else {
      // Check if the book is already in the cart
      const existingBook = cart.books.find((item) => item.bookId.toString() === book.bookId);

      if (existingBook) {
        existingBook.quantity += 1; // Increment quantity if already in the cart
      } else {
        cart.books.push(book); // Add new book
      }
    }

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error('Error processing cart:', error); // Log error for debugging
    res.status(500).json({ success: false, error: error.message });
  }
});


// Get the user's cart
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart || { books: [] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


// Remove a book from the cart
router.post('/remove', async (req, res) => {
    const { userId, bookId } = req.body;
  
    try {
      let cart = await Cart.findOne({ userId });
      if (!cart) return res.status(404).json({ success: false, error: 'Cart not found' });
  
      cart.books = cart.books.filter(book => book.bookId.toString() !== bookId);
      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
// Update the quantity of a book in the cart
router.post('/update', async (req, res) => {
    const { userId, bookId, quantity } = req.body;
  
    try {
      let cart = await Cart.findOne({ userId });
      if (!cart) return res.status(404).json({ success: false, error: 'Cart not found' });
  
      const book = cart.books.find(item => item.bookId.toString() === bookId);
      if (book) {
        book.quantity = quantity;
        await cart.save();
        res.status(200).json(cart);
      } else {
        res.status(404).json({ success: false, error: 'Book not found in cart' });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  


module.exports = router;
