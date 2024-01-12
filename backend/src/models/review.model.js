const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true
  },
  
  rating: {
    type: Number,
    required: true
  },
    name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
