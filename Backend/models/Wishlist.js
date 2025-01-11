const mongoose = require('mongoose');

// Define the schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  publisher: { type: String, required: true },
   image: { type: String, required: true },
   popular: { type: Boolean, default: false }, // New field
});

const wishlistSchema = new mongoose.Schema({
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

// Create the model  
const Wishlist = mongoose.model("Wishlist", wishlistSchema);


// Export the model
module.exports = Wishlist;

