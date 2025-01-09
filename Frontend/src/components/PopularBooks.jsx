import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const PopularBooks = () => {
    const [popularBooks, setPopularBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/popular-books')
            .then((response) => response.json())
            .then((data) => setPopularBooks(data))
            .catch((error) => console.error('Error fetching popular books:', error));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center uppercase  mb-4 underline text-rose-600">Popular Books</h2>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {popularBooks.map((book) => (
                    <div
                        key={book._id}
                        className="p-4 border rounded shadow hover:shadow-lg transition"
                    >
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-sm text-gray-600">{book.author}</p>
                        <p className="text-sm mt-2">{book.description}</p>
                        <p className="text-sm font-bold mt-2">${book.price}</p>
                    </div>
                ))}
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {popularBooks.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
        </div>
    );
};

export default PopularBooks;
