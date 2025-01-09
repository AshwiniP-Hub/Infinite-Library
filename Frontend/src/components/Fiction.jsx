import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const FictionBooks = () => {
  const [fictionBooks, setFictionBooks] = useState([]);

  useEffect(() => {
    const fetchFictionBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/fiction'); // Replace with your API endpoint
        const data = await response.json();
        setFictionBooks(data);
      } catch (error) {
        console.error('Error fetching Fiction books:', error);
      }
    };

    fetchFictionBooks();
  }, []);

  return (
   <>
   <div>
   <div className='text-4xl text-center p-2 font-bold uppercase text-rose-700'>Fiction Books</div>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {fictionBooks.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
   </div>
   </>
    
  );
};

export default FictionBooks;
