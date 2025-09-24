const Book = require("../models/book");

// CRUD - Create, Read, Update and Delete

// @desc Create a new book
// @route /api/v1/book/create
// @access PUBLIC

const createBook = async (req, res, next) => {
  try {
    const { title, author, genre, year, price, preview, review } = req.body;

    // Validate required fields
    if (!title)
      return res.status(400).json({ message: "Please provide a book title" });
    if (!author)
      return res.status(400).json({ message: "Please provide a author" });
    if (!genre)
      return res.status(400).json({ message: "Please provide a genre" });
    if (!year)
      return res
        .status(400)
        .json({ message: "Please provide a publication year" });
    if (!price)
      return res.status(400).json({ message: "Please provide a price" });
    if (!preview)
      return res
        .status(400)
        .json({ message: "Please provide a short preview" });
    if (!review)
      return res.status(400).json({ message: "Please rate the book" });

    // CREATE A NEW BOOK
    const book = await Book.create(req.body);
    res
      .status(201)
      .json({ message: "Book Create Successfully", newBook: book });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error || Server is Down Curently",
      error: error.message,
    });
  }
};

//@desc Get all books
//@route GET/ api/v1/book
//@access Public

const getBooks = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book updated Successfully", updatedBook: book });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error || Server is Down Currently",
      error: error.message,
    });
  }
};

//@desc Update or Edit a book
//@route PUT- /api/v1/books/:id
//@access Public

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book updated Successfully", updatedBook: book });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error || Server is Down Currently",
      error: error.message,
    });
  }
};

//@desc Delete a book
//@route DELETE /api/v1/book/:id
//@access Public

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book Deleted Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error || Server is Down Currently",
      error: error.message,
    });
  }
};

module.exports = { createBook, getBooks, updateBook, deleteBook };
