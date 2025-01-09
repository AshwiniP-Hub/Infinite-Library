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

// Create the model
const Book = mongoose.model('Book', bookSchema);

// Export the model
module.exports = Book;


