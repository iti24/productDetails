const express = require("express");
const router = express.Router();
const {
  createBookdetails,
  getBookdetails,
  getBookdetailsById,
  searchbooks,
} = require("../controllers/book");
const { upload } = require("../middleware/upload");
// Define routes for CRUD operations on books
router.post("/", upload.single("image"), createBookdetails);
router.get("/", getBookdetails);
router.get("/search/searchterm", searchbooks);
router.get("/:id", getBookdetailsById);

module.exports = router;
