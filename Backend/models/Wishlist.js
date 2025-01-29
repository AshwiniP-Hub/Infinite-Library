const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  publisher: { type: String, required: true },
   image: { type: String, required: true },
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Wishlist = mongoose.model("Todo", wishlistSchema);
module.exports = Wishlist;
