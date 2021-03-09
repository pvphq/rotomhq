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
const Data = require("../models/data.js");
const GymData = require("../data/gym");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const trainerName =
    message.mentions.users.first() || bot.users.cache.get(args[0]);

  if (message.channel.id === "818829790583848990") {
    GymData.find((o, i) => {
      if (message.member.roles.cache.has(o.gymRoleID)) {
        message.client.channels.cache
          .get("818871238390317067")
          .send(
            `**${trainerName}** has defeated **${leader}** in ${GymData[i].gymName}`
          );

        message.react("✅");
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
    });
  } else {
    message.channel.send(
      "Err! Wrong Channel! Use the command in <#818829790583848990>!"
    );
    message.react("❌");
    return;
  }
};

module.exports.help = {
  name: "reportwin",
  aliases: ["rw", "beat"],
};
