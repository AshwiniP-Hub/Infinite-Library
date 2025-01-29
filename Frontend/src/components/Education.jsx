import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const EducationBooks = () => {
  const [educationBooks, seteducationBooks] = useState([]);

  useEffect(() => {
    const fetchEducationBooks = async () => {
      try {
        const response = await fetch('https://infinitelibrary.onrender.com/api/education'); 
        const data = await response.json();
        seteducationBooks(data);
      } catch (error) {
        console.error('Error fetching Education books:', error);
      }
    };

    fetchEducationBooks();
  }, []);

  return (
    <>
    <div>
    <div className='text-4xl text-center p-2 font-bold uppercase text-rose-700'>Education Books</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {educationBooks.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
    </div>
     
    </>
   
  );
};

export default EducationBooks;
