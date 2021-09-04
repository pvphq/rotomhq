const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: String,
  cp: Number,
  isShadow: Boolean,
});

const teamSchema = mongoose.Schema({
  pokemon1: pokemonSchema,
  pokemon2: pokemonSchema,
  pokemon3: pokemonSchema,
  pokemon4: pokemonSchema,
  pokemon5: pokemonSchema,
  pokemon6: pokemonSchema,
});

const userSchema = mongoose.Schema({
  ign: String,
  discordName: String,
  discordId: String,
  email: String,
  trainerCode: String,
  trainerTeam: String,
  role: String,
  level: Number,
  nationality: String,
  totalWins: Number,
  totalMatches: Number,
  xp: Number,
  buddy: String,
  homeCommunity: String,
  isLeader: Boolean,
  leaderInfo: {
    region: String,
    leaderGymName: String,
    leaderTeam: teamSchema,
    leaderWins: Number,
    leaderMatches: Number,
  },

  towerOfMastery: {
    region: String,
    currentGym: String,
    gymTeam: teamSchema,
    gymWins: Number,
    gymMatches: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
