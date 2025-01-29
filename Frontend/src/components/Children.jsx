import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const ChildrenBooks = () => {
    const [childrenBooks, setChildrenBooks] = useState([]);

    useEffect(() => {
        const fetchChildrenBooks = async () => {
            try {
                const response = await fetch('https://infinitelibrary.onrender.com/api/children');
                const data = await response.json();
                setChildrenBooks(data);
            } catch (error) {
                console.error('Error fetching Fiction books:', error);
            }
        };

        fetchChildrenBooks();
    }, []);

    return (
        <>
            <div className='px-5'>
                <div className='text-4xl text-center p-2 font-bold uppercase text-rose-700'>Children Books</div>
                <div className='flex flex-col'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {childrenBooks.map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default ChildrenBooks;
