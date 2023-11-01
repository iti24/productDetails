const Book = require("../models/book");
const createBookdetails = async (req, res) => {
  try {
    const productData = req.body;
    const data = {
      imageUrl: req.file.location,
      title: productData.title,
      description: productData.description,
      price: productData.price,
      stock: productData.stock,
    };
    const book = new Book(data);
    await book.save();
    res.status(201).json({ message: "the book details  save successfully " });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const getBookdetails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number (default to 1)
    const perPage = parseInt(req.query.perPage) || 10;
    const skip = (page - 1) * perPage;
    const books = await Book.find().skip(skip).limit(perPage);

    res.status(201).json(books);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};
const getBookdetailsById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      res.status(404).json({ message: "book details are not found" });
    }
    res.status(201).json(book);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const searchbooks = async (req, res) => {
  try {
    const searchTerm = req.query.search;

    const findBook = await Book.find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    });
    if (!findBook || findBook.length === 0) {
      return res.status(404).json({ message: "Book details are not found." });
    }
    res.json(findBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBookdetails,
  getBookdetails,
  getBookdetailsById,
  searchbooks,
};
