import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const bookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // bookImage: {
  //   type: String,
  // },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  reviews: [ReviewSchema],
  views: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    required: true,
    enum: ["available", "unavailable"],
    default: "available",
  },
});

export default mongoose.model("Book", bookSchema);
