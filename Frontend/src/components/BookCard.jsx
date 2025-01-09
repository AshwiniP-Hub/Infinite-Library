import React, { useState } from 'react';
import { TiHeartFullOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { id, title, author, category, price, publisher, image } = book;
  const imageUrl = image || 'https://via.placeholder.com/150';

 return (
    <div className="border rounded shadow p-4 flex flex-col items-center relative">
      {/* Wishlist Button */}
      <button >
        <TiHeartFullOutline
          className="absolute text-5xl top-2 right-2 p-2"
        />
      </button>

      {/* Book Image */}
      <img
        src={imageUrl}
        alt={title}
        className="h-40 w-32 object-fit mb-4"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
      />

      {/* Book Details */}
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-sm text-gray-700">{author}</p>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-sm text-gray-900">Price: ₹{price}</p>
      <p className="text-sm text-gray-500">{publisher}</p>

      {/* Action Buttons */}
      <div className="flex mt-4 gap-2 w-full">
        <button
          className="py-2 px-4 rounded hover:bg-pink-500 border-2 border-pink-500 w-full"
        >
          Add to Cart
        </button>

        <button className="bg-pink-500 py-2 px-4 rounded hover:bg-pink-600 w-full">
          <Link to="/">Buy Now</Link>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
