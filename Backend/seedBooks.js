const mongoose = require('mongoose');
const Book = require('./models/Book'); // Adjust the path to your Book model
const dotenv = require('dotenv');
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    seedBooks();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

const seedBooks = async () => {
  try {
    const books = [
      {
        "title": "Adventures of Super Diaper Baby",
        "author": "Dav Pilkey",
        "publisher": "Hachette India",
        "category": "Comics, Children",
        "price": 99
      },
      {
        "title": "A Cheese Colored Camper",
        "author": "Stilton Geronimo",
        "publisher": "Hachette India",
        "category": "Comics, Children",
        "price": 327
      },
      {
        "title": "A Clan In Need",
        "author": "Hunter, Erin",
        "publisher": "Srishti Publishers & Distributors",
        "category": "Comics, Children",
        "price": 509
      },
      {
        "title": "Chocolate Dog",
        "author": "Holly Webb",
        "publisher": "Rupa Publications India",
        "category": "Comics, Children",
        "price": 107
      },
      {
        "title": "Disney Frozen",
        "author": "NA",
        "publisher": "Pigeon Books",
        "category": "Comics, Children",
        "price": 180
      },
      {
        "title": "Hobbit",
        "author": "Tolkien, J. R. R.",
        "publisher": "Allen & Unwin",
        "category": "Comics, Children",
        "price": 849
      }
    ];

    await Book.insertMany(books);
    console.log('Books seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding books:', error);
    mongoose.connection.close();
  }
};
