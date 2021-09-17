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
const IN = require("../data/INGymData.js");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const trainer = message.mentions.members.first();
  const trainerName = message.mentions.users.first();

  if (message.channel.id === "882615634905673778") {
    EU.find((o, i) => {
      if (message.member.roles.cache.has(o.gymRoleID)) {
        badge = `${EU[i].badgeName} 🥇`;
        challengerRole = message.guild.roles.cache.find(
          (r) => r.id === `${EU[i].gymChallengerRoleID}`
        );
        badgeRole = message.guild.roles.cache.find(
          (r) => r.name === `${EU[i].badgeName}`
        );
        message.react("✅");

        const awardEmbed = new Discord.MessageEmbed()
          .setColor("#daffe7")
          .addFields({
            value: `You have been awarded the **${badge}** by **${leader.username}**.`,
            name: `🎉 Congratulations on defeating the ${EU[i].gymRoleName}, **${trainerName.username}**`,
            inline: true,
          })
          .setTimestamp();

        message.client.channels.cache
          .get("882106929646829619")
          .send(awardEmbed);

        const embed = new Discord.MessageEmbed().setDescription(
          `${badge} has been awarded to ${trainerName} by ${leader}`
        );
        message.channel.send(embed);
        message.react("✅");

        trainer.roles.add(badgeRole);
        trainer.roles.remove(challengerRole);

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
        badge = `${IN[i].badgeName} 🥇`;
        challengerRole = message.guild.roles.cache.find(
          (r) => r.id === `${IN[i].gymChallengerRoleID}`
        );
        badgeRole = message.guild.roles.cache.find(
          (r) => r.name === `${IN[i].badgeName}`
        );
        message.react("✅");

        const awardEmbed = new Discord.MessageEmbed()
          .setColor("#daffe7")
          .addFields({
            value: `You have been awarded the **${badge}** by **${leader.username}**.`,
            name: `🎉 Congratulations on defeating the ${IN[i].gymRoleName}, **${trainerName.username}**`,
            inline: true,
          })
          .setTimestamp();

        message.client.channels.cache
          .get("884909881549787227")
          .send(awardEmbed);

        const embed = new Discord.MessageEmbed().setDescription(
          `${badge} has been awarded to ${trainerName} by ${leader}`
        );
        message.channel.send(embed);
        message.react("✅");

        trainer.roles.add(badgeRole);
        trainer.roles.remove(challengerRole);

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
      )} Use the awardbadge command in #leader-commands channel!`
    );
    message.channel.send(embed);
    message.react("❌");
    return;
  }
};

module.exports.help = {
  name: "awardbadge",
  aliases: ["givebadge"],
};
