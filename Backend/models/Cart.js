const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  books: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    //   title: { type: String, required: true },
    //   author: { type: String, required: true },
    //   category: { type: String, required: true },
    //   price: { type: Number, required: true },
    //   publisher: { type: String, required: true },
    //    image: { type: String, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

// Create the model  
const Cart = mongoose.model('Cart', CartSchema);

// Export the model
module.exports = Cart;


