const express = require("express");
const {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

const router = express.Router();

router.post("/create", createBook);

router.get("/", getBooks);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
