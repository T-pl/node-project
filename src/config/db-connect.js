import mongoose, { mongo } from "mongoose";

async function connectBd() {
  mongoose.connect(process.env.DB_CONNECTION)
  return mongoose.connection;
};

export default connectBd;
