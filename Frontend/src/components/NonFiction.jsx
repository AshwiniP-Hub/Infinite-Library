import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const NonFictionBooks = () => {
  const [nonFictionBooks, setNonFictionBooks] = useState([]);

  useEffect(() => {
    const fetchNonFictionBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/non-fiction'); 
        const data = await response.json();
        setNonFictionBooks(data);
      } catch (error) {
        console.error('Error fetching Fiction books:', error);
      }
    };

    fetchNonFictionBooks();
  }, []);

  return (
    <>
    <div>
    <div className='text-4xl text-center p-2 font-bold uppercase text-rose-700'>Non-Fiction Books</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {nonFictionBooks.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
    </div>
    </>
    
  );
};

export default NonFictionBooks;
