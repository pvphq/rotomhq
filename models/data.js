const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  name: String,
  userID: String,
  lb: String,
  creds: Number,
  wins: Number,
  losses: Number,
});

module.exports = mongoose.model("Data", dataSchema);
