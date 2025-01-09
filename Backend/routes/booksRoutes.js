const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book'); // Import Mongoose model

// Cloudinary and Multer Setup
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'book-images',
        allowed_formats: ['jpg', 'png', 'jpeg'],
    },
});

// Multer for handling file uploads
const upload = multer({ dest: 'uploads/' });;

// Add Book API Endpoint
router.post('/api/books', upload.single('image'), async (req, res) => {
    try {
        const { title, author, category, price, publisher } = req.body;

        if (!title || !author || !category || !price || !publisher) {
            return res.status(400).send('All fields are required');
        }

        let imageUrl = null;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'book-images',
            });
            imageUrl = result.secure_url; // Store the Cloudinary URL
        }

        const book = new Book({
            title,
            author,
            category,
            price: Number(price),
            publisher,
            image: imageUrl,
        });

        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
router.post('/api/books', upload.single('image'), async (req, res) => {
    try {
        const { title, author, category, price, publisher } = req.body;

        if (!title || !author || !category || !price || !publisher) {
            return res.status(400).send('All fields are required');
        }

        let imageUrl = null;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'book-images',
            });
            imageUrl = result.secure_url; // Store the Cloudinary URL
        }

        const book = new Book({
            title,
            author,
            category,
            price: Number(price),
            publisher,
            image: imageUrl,
        });

        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
router.post('/api/books', upload.single('image'), async (req, res) => {
    try {
        const { title, author, category, price, publisher } = req.body;

        if (!title || !author || !category || !price || !publisher) {
            return res.status(400).send('All fields are required');
        }

        let imageUrl = null;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'book-images',
            });
            imageUrl = result.secure_url; // Store the Cloudinary URL
        }

        const book = new Book({
            title,
            author,
            category,
            price: Number(price),
            publisher,
            image: imageUrl,
        });

        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
router.post('/api/books', upload.single('image'), async (req, res) => {
    try {
        const { title, author, category, price, publisher } = req.body;

        if (!title || !author || !category || !price || !publisher) {
            return res.status(400).send('All fields are required');
        }

        let imageUrl = null;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'book-images',
            });
            imageUrl = result.secure_url; // Store the Cloudinary URL
        }

        const book = new Book({
            title,
            author,
            category,
            price: Number(price),
            publisher,
            image: imageUrl,
        });

        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
router.post('/api/books', upload.single('image'), async (req, res) => {
    try {
        const { title, author, category, price, publisher } = req.body;

        if (!title || !author || !category || !price || !publisher) {
            return res.status(400).send('All fields are required');
        }

        let imageUrl = null;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'book-images',
            });
            imageUrl = result.secure_url; // Store the Cloudinary URL
        }

        const book = new Book({
            title,
            author,
            category,
            price: Number(price),
            publisher,
            image: imageUrl,
        });

        await book.save();
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get a Single Book by ID
router.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: 'Invalid book ID' });
        }

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book', error });
    }
});

// Get All Books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error });
    }
});

// Add a New Book
router.post('/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: 'Error adding book', error });
    }
});

// Update a Book
router.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: 'Error updating book', error });
    }
});

// Delete a Book
router.delete('/books/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error });
    }
});

// Route to get Fiction books
router.get('/fiction', async (req, res) => {
    try {
      // Fetch books with category 'Fiction'
      const fictionBooks = await Book.find({ category: 'Fiction' });
      res.status(200).json(fictionBooks); // Send the array of books as a response
    } catch (error) {
      console.error('Error fetching Fiction books:', error);
      res.status(500).json({ message: 'Error fetching Fiction books', error });
    }
  });
  
  // Route to get Education books
router.get('/education', async (req, res) => {
    try {
      // Fetch books with category 'Education'
      const educationBooks = await Book.find({ category: 'Education' });
      res.status(200).json(educationBooks); // Send the array of books as a response
    } catch (error) {
      console.error('Error fetching Education books:', error);
      res.status(500).json({ message: 'Error fetching education books', error });
    }
  });

  // Route to get Non-Fiction books
router.get('/non-fiction', async (req, res) => {
    try {
      // Fetch books with category 'Non-Fiction'
      const nonFictionBooks = await Book.find({ category: 'Non-Fiction' });
      res.status(200).json(nonFictionBooks); // Send the array of books as a response
    } catch (error) {
      console.error('Error fetching Non-Fiction books:', error);
      res.status(500).json({ message: 'Error fetching Non-Fiction books', error });
    }
  });

  // Route to get Children books
router.get('/children', async (req, res) => {
    try {
      // Fetch books with category 'children'
      const childrenBooks = await Book.find({ category: 'Children' });
      res.status(200).json(childrenBooks); // Send the array of books as a response
    } catch (error) {
      console.error('Error fetching children books:', error);
      res.status(500).json({ message: 'Error fetching children books', error });
    }
  });  

  // Set a book as popular
router.put('/books/:id/popular', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            { popular: true },
            { new: true }
        );
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

  //Route to Get popular books
router.get('/popular-books', async (req, res) => {
    try {
        const popularBooks = await Book.find({ popular: true });
        res.json(popularBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Search endpoint
router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
      const results = await Book.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { author: { $regex: query, $options: 'i' } },
        ],
      });
      res.json(results);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

  router.post('/orders', async (req, res) => {
    try {
      const { bookId, userId } = req.body; // Use userId for authentication
      const book = await Book.findById(bookId);
  
      if (!book) {
        return res.status(404).send('Book not found');
      }
  
      const order = new Order({
        book: bookId,
        user: userId,
        orderDate: new Date(),
      });
  
      await order.save();
      res.status(201).send(order);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
    
module.exports = router;
