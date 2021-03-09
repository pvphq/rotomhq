const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  name: String,
  userID: String,
  lb: String,
  creds: Number,
  wins: Number,
  losses: Number,
  leaderlosses: Number,
  leaderwins: Number,
});

module.exports = mongoose.model("Data", dataSchema);
