import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import Event from "./models/event.js";
import Leaderboard from "./models/leaderboard.js";
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

app.get("/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post("/events/new", (req, res) => {
  const events = new Event(req.body);
  events.save();
  res.json(events);
});

app.delete("/events/delete/:id", async (req, res) => {
  const result = await Event.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.get("/leaderboards", async (req, res) => {
  const leaderboards = await Leaderboard.find();
  res.json(leaderboards);
});

app.post("/leaderboards/new", (req, res) => {
  const leaderboards = new Leaderboard(req.body);
  leaderboards.save();
  res.json(leaderboards);
});

app.delete("/leaderboards/delete/:id", async (req, res) => {
  const result = await Leaderboard.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.listen(3001, () => console.log("Server started"));
