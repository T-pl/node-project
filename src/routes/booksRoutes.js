import express from 'express';
import BookController from '../controllers/bookController.js';

const routes = express.Router();

routes.post("/books", BookController.addBook);
routes.get("/books", BookController.listBooks);
routes.get("/books/:id", BookController.getBook);
routes.put("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBook);
export default routes;