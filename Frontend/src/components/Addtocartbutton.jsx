import React from "react";
import axios from "axios";

const AddToCartButton = ({ userId, book }) => {
  const handleAddToCart = async () => {
    try {
      const response = await axios.post("http://localhost:5000/cart/add", {
        userId,
        book,
      });

      if (response.data.success) {
        alert("Book added to cart successfully!");
      } else {
        alert("Failed to add book to cart.");
      }
    } catch (error) {
      console.error("Error adding book to cart:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
