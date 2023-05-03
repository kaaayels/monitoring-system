import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Event = mongoose.model("Todo", EventSchema);

export default Event;
