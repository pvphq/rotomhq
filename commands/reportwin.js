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
const User = require("../models/user.js");
const EU = require("../data/EUGymData");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const trainerName =
    message.mentions.users.first() || bot.users.cache.get(args[0]);

  if (message.channel.id === "882615634905673778") {
    EU.find((o, i) => {
      if (message.member.roles.cache.has(o.gymRoleID)) {
        User.findOne(
          {
            discordId: leader.id,
          },
          (err, leaderData) => {
            if (err) console.log(err);
            if (!leaderData) {
              const embed = new Discord.MessageEmbed().setDescription(
                `${bot.users.cache.get(
                  leader.id
                )}, you've not registered on the website, you cannot perform this action!`
              );
              message.channel.send(embed);
              message.react("❌");
              return;
            } else {
              if (!leaderData.leaderInfo.leaderWins) {
                if (!leaderData.leaderInfo.leaderMatches) {
                  leaderData.leaderInfo.leaderWins = 0;
                  leaderData.leaderInfo.leaderMatches = 1;
                  leaderData.save().catch((err) => console.log(err));
                } else {
                  leaderData.leaderInfo.leaderWins = 0;
                  leaderData.leaderInfo.leaderMatches += 1;
                  leaderData.save().catch((err) => console.log(err));
                }
              } else {
                leaderData.leaderInfo.leaderMatches += 1;
                leaderData.save().catch((err) => console.log(err));
              }
            }
          }
        );

        message.client.channels.cache
          .get("882106887569559572")
          .send(
            `**${trainerName}** has defeated **${leader}** in ${EU[i].gymRoleIDTag}`
          );

        message.react("✅");

        User.findOne(
          {
            discordId: trainerName.id,
          },

          (err, userData) => {
            if (err) console.log(err);
            if (!userData.towerOfMastery.gymWins) {
              if (!userData.towerOfMastery.gymMatches) {
                userData.towerOfMastery.gymWins = 1;
                userData.towerOfMastery.gymMatches = 1;
                userData.save().catch((err) => console.log(err));
              } else {
                userData.towerOfMastery.gymWins = 1;
                userData.towerOfMastery.gymMatches += 1;
                userData.save().catch((err) => console.log(err));
              }
            } else {
              userData.towerOfMastery.gymMatches += 1;
              userData.towerOfMastery.gymWins += 1;
              userData.save().catch((err) => console.log(err));
            }
          }
        );

        return true; // stop searching
      } else {
        return;
      }
    });
  } else {
    const embed = new Discord.MessageEmbed().setDescription(
      `${bot.users.cache.get(
        leader.id
      )} Use the reportwin command in <#882615634905673778> for EU <:EU:870766537580118066>!`
    );
    message.channel.send(embed);
    message.react("❌");
    return;
  }
};

module.exports.help = {
  name: "reportwin",
  aliases: ["rw", "beat"],
};
