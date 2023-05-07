import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema({
  college: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

const Leaderboard = mongoose.model("Leaderboard", LeaderboardSchema);

export default Leaderboard;
