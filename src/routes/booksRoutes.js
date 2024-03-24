import express from 'express';
import BookController from '../controllers/bookController.js';

const routes = express.Router();

routes.get("/books", BookController.listBooks);
routes.get("/books/search", BookController.listBooksByPublish);
routes.get("/books/:id", BookController.getBookById);
routes.post("/books", BookController.addBook);
routes.put("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBook);
export default routes;