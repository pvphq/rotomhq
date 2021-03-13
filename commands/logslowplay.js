// at the top of your file
const Discord = require("discord.js");
const mongoose = require("mongoose");
// const botconfig = require("../botconfig.json");

//Connect to db
mongoose.connect(process.env.mongoPass, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MODELS
const GymData = require("../data/gym");
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id != ("271234466993799180" || "540838426484801536"))
    return message.reply("you're not an admin, are you boy?");

  const leader = bot.users.cache.get(args[1]);
  const trainerName =
    message.mentions.users.first() || bot.users.cache.get(args[0]);

  if (message.channel.id === "716746431729238077") {
    message.client.channels.cache
      .get("818871238390317067")
      .send(
        `**${trainerName}** has been given a win against **${leader}** due to slowplay!`
      );

    Data.findOne(
      {
        userID: trainerName.id,
      },

      (err, userData) => {
        if (err) console.log(err);

        if (!userData) {
          const newData = new Data({
            name: bot.users.cache.get(trainerName.id).username,
            userID: trainerName.id,
            lb: "all",
            creds: 0,
            wins: 1,
            losses: 0,
            leaderlosses: 0,
            leaderwins: 0,
          });
          newData.save().catch((err) => console.log(err));
        } else {
          userData.wins += 1;
          userData.save().catch((err) => console.log(err));
        }
      }
    );

    Data.findOne(
      {
        userID: leader.id,
      },
      (err, leaderData) => {
        if (err) console.log(err);

        if (!leaderData) {
          const newData = new Data({
            name: bot.users.cache.get(leader.id).username,
            userID: leader.id,
            lb: "all",
            creds: 0,
            wins: 0,
            losses: 0,
            leaderwins: 0,
            leaderlosses: 1,
          });
          newData.save().catch((err) => console.log(err));
        } else {
          leaderData.leaderlosses += 1;
          leaderData.save().catch((err) => console.log(err));
        }
      }
    );
    return true; // stop searching
  } else {
    return;
  }
};

module.exports.help = {
  name: "logslowplay",
  aliases: ["slowplay"],
};
