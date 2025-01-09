const express = require("express");
const bcrypt = require("bcryptjs");
// const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const booksRoutes = require('./routes/booksRoutes');
const cloudinary = require('./config/cloudinary');
const upload = require('./middlewares/multer');
const jwt = require('jsonwebtoken');
const userRoutes = require('./routes/userRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');


const app = express();

// Load environment variables
require("dotenv").config();
dotenv.config();

// Connect to MongoDB
connectDB();


// Middleware
app.use(cors());
app.use(bodyParser.json());            // Enable CORS
app.use(express.json());    // Parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // To handle form-data submissions

// API Routes
app.use('/api', booksRoutes); // Prefix all routes in booksRoutes with '/api'
app.use('/user', userRoutes);
app.use('/api',wishlistRoutes);



// Serve static files
app.use('/uploads', express.static('uploads'));

// File Upload Route
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload_stream(
      { folder: 'uploads' }, // optional folder name
      (error, result) => {
        if (error) return res.status(500).json({ error: error.message });

        res.status(200).json({
          message: 'Image uploaded successfully',
          url: result.secure_url,
        });
      }
    );
    // Pipe the file buffer to the Cloudinary upload stream
    result.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
