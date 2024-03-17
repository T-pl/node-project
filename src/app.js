import express from 'express';
import connectBd from './config/db-connect.js';
import book from './models/Book.js';

const connection = await connectBd();

connection.on("error", (err) => {
  console.error("Connection error:", err);
});
connection.once("open", () => {
  console.log("Connection success!");
});
const app = express();
app.use(express.json());

app.get('/', (req, res) => {

  res.status(200).send('Home');
});

// app.get('/books', async (req, res) => {
//   const listBooks = await book.find({});
//   res.status(200).json(listBooks);
// });


app.get(`/books/:id`, (req, res) => {
  const index = searchBook(req.params.id);
  res.status(200).json(books[index]);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send("Livro Cadastrado com sucesso.");
});

app.put(`/books/:id`, (req, res) => {
  const index = searchBook(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});
app.delete(`/books/:id`, (req, res) => {
  const index = searchBook(req.params.id);
  books.splice(index, 1);
  res.status(200).send("Book delete with success.");
});
export default app;