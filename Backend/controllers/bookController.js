const Book = require('../models/Book');

const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

const addBook = async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).json(newBook);
};

module.exports = { getBooks, addBook, getTrendingBooks};
