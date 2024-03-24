import express from 'express';
import connectBd from './config/db-connect.js';
import routes from './routes/index.js';

const connection = await connectBd();

connection.on("error", (err) => {
  console.error("Connection error:", err);
});
connection.once("open", () => {
  console.log("Connection success!");
});
const app = express();
routes(app);

export default app;