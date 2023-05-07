import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  sport: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  winner: {
    type: String,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Event = mongoose.model("Event", EventSchema);

export default Event;
