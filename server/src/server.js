import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(express.json());
app.use(cors());

// Connects server to the mongodb
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.error(err));

app.listen(3001, () => console.log("Server started"));
