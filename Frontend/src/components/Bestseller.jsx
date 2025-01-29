// src/components/BooksList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from './BookCard';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Footer from './Footer';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch books from the backend
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://infinitelibrary.onrender.com/api/books");
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching books. Please try again later.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <Navbar/>
     <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Books List</h1> */}
      <div className='text-4xl text-center p-2 font-bold uppercase text-rose-700'>Best Seller Books</div>
      {books.length === 0 ? (
        <div className="text-center">No books available.</div>
      ) : (
       
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {books.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
      )}
    </div>
    <Footer/> 
    </>
   
  );
};

export default BooksList;
