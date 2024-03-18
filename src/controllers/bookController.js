import book from "../models/Book.js";


class BookController {
  static async addBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({ message: "Create with success.", book: newBook });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to add a new book.` });
    }
  };

  static async listBooks(req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to list all books.` })
    }
  };

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book update with success." });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed in update book.` })
    }
  };

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Book deleted with success." });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed in delete book.` })
    }
  }


  static async getBook(req, res) {
    try {
      const id = req.params.id;
      const bookFound = await book.findById(id);
      res.status(200).json(bookFound);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Faleid get one book.` })
    }
  };


};

export default BookController;