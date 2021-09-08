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
const IN = require("../data/INGymData");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const trainer = message.mentions.members.first();
  const trainerName = message.mentions.users.first();
  const holdRole = message.guild.roles.cache.find((r) => r.name === "OnHold");

  if (message.channel.id === "882615634905673778") {
    EU.find((o, i) => {
      if (message.member.roles.cache.has(o.gymRoleID)) {
        const kickEmbed = new Discord.MessageEmbed()
          .setColor("#daffe7")
          .addFields({
            value: `Come back after 7 days from this message!`,
            name: `**${trainerName.username}** has been defeated in **${EU[i].gymRoleName}**!`,
            inline: true,
          })
          .setTimestamp();
        message.client.channels.cache.get("882106887569559572").send(kickEmbed);
        const embed = new Discord.MessageEmbed().setDescription(
          `${bot.users.cache.get(trainer.id)} has been removed from your gym!`
        );
        message.channel.send(embed);
        message.react("✅");

        challengerRole = message.guild.roles.cache.find(
          (r) => r.id === EU[i].gymChallengerRoleID
        );
        trainer.roles.remove(challengerRole);
        trainer.roles.remove(holdRole);

        User.findOne(
          {
            discordId: trainerName.id,
          },

          (err, userData) => {
            if (err) console.log(err);
            userData.towerOfMastery.currentGym = "";
            userData.save().catch((err) => console.log(err));
          }
        );
        return true; // stop searching
      } else {
        return;
      }
    });
  } else if (message.channel.id === "884909041724325889") {
    IN.find((o, i) => {
      if (message.member.roles.cache.has(o.gymRoleID)) {
        const kickEmbed = new Discord.MessageEmbed()
          .setColor("#daffe7")
          .addFields({
            value: `Come back after 7 days from this message!`,
            name: `**${trainerName.username}** has been defeated in **${IN[i].gymRoleName}**!`,
            inline: true,
          })
          .setTimestamp();
        message.client.channels.cache.get("884909598765641768").send(kickEmbed);
        const embed = new Discord.MessageEmbed().setDescription(
          `${bot.users.cache.get(trainer.id)} has been removed from your gym!`
        );
        message.channel.send(embed);
        message.react("✅");

        challengerRole = message.guild.roles.cache.find(
          (r) => r.id === IN[i].gymChallengerRoleID
        );
        trainer.roles.remove(challengerRole);
        trainer.roles.remove(holdRole);

        User.findOne(
          {
            discordId: trainerName.id,
          },

          (err, userData) => {
            if (err) console.log(err);
            userData.towerOfMastery.currentGym = "";
            userData.save().catch((err) => console.log(err));
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
      )} Use the gymkick command in #leader-commands channel!`
    );
    message.channel.send(embed);
    message.react("❌");
    return;
  }
};

module.exports.help = {
  name: "gymkick",
  aliases: ["comeagain"],
};
