const mongoose = require("mongoose");
const { title } = require("process");

// Define it based of the name of the file or product you intend creating

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please add a book title"],
    },
    author: {
      type: String,
      trim: true,
      required: [true, "Please add a book title"],
    },
    genre: {
      type: String,
      trim: true,
      enum: [
        "comedy",
        "romance",
        "tragedy",
        "thriller",
        "horror",
        "tragicomedy",
        "scri-fi",
        "crime",
        "poetry",
        "adventure",
        "african-litrature",
        "drama",
        "action",
      ],
      required: [true, "Please select a Genre from thecategory above "],
    },
    year: {
      type: String,
      trim: true,
      required: [true, "Please add a year"],
    },
    price: {
      type: Number,
      required: [true, "Please add a Price Tag"],
    },
    preview: {
      type: String,
      trim: true,
      required: [true, "Please add a book title"],
    },
    review: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema);
