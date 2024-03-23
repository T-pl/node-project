import {author}from "../models/Author.js";


class AuthorController {
  static async addAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "Create with success.", author: newAuthor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to add a new author.` });
    }
  };

  static async listAuthors(req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to list all authors.` })
    }
  };

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "author update with success." });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed in update author.` })
    }
  };

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "author deleted with success." });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed in delete author.` })
    }
  }


  static async getAuthor(req, res) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);
      res.status(200).json(authorFound);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Faleid get one author.` })
    }
  };


};

export default AuthorController;