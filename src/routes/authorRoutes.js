import express from 'express';
import AuthorController from '../controllers/authorController.js';
const routes = express.Router();

routes.post("/author", AuthorController.addAuthor);
routes.get("/authors", AuthorController.listAuthors);
routes.get("/author/:id", AuthorController.getAuthor);
routes.put("/author/:id", AuthorController.updateAuthor);
routes.delete("/author/:id", AuthorController.deleteAuthor);
export default routes;