const Discord = require("discord.js");
const mongoose = require("mongoose");

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

  User.findOne(
    {
      discordId: trainer.id,
    },
    (err, data) => {
      if (err) console.log(err);
      if (!data) {
        const embed = new Discord.MessageEmbed().setDescription(
          `${bot.users.cache.get(
            trainer.id
          )} hasn't registered for ToM yet! <:HQ:741349932086198304>\n`
        );
        message.channel.send(embed);
        message.react("❌");
        return;
      } else {
        if (!data.towerOfMastery.region) {
          const embed = new Discord.MessageEmbed().setDescription(
            `${bot.users.cache.get(
              trainer.id
            )}hasn't set their region yet!\n Ask them to go to <#717681173152661544> and use the **hq!setregion** command!`
          );
          message.channel.send(embed);
          message.react("❌");
          return;
        } else if (data.towerOfMastery.region === "EU") {
          if (
            !data.towerOfMastery.currentGym ||
            data.towerOfMastery.currentGym === ""
          ) {
            EU.find((o, i) => {
              if (message.member.roles.cache.has(o.gymRoleID)) {
                if (message.channel.id === "882615634905673778") {
                  challengerRole = message.guild.roles.cache.find(
                    (r) => r.id === EU[i].gymChallengerRoleID
                  );
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(
                      trainer.id
                    )} has been added to your gym!`
                  );
                  message.channel.send(embed);
                  message.react("✅");
                  message.client.channels.cache
                    .get(EU[i].gymChannelID)
                    .send(
                      `${trainer}` +
                        ` is here! Please time your matches with ${EU[i].gymRoleIDTag} and have fun :)) GL! 🔥`
                    );
                  data.towerOfMastery.currentGym = `${EU[i].gymRoleName}`;
                  data.save().catch((err) => console.log(err));
                  trainer.roles.add(challengerRole);
                  return true; // stop searching
                } else {
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(
                      leader.id
                    )} Use the allow command in <#882615634905673778> for EU <:EU:870766537580118066>!`
                  );
                  message.channel.send(embed);
                  message.react("❌");
                  return;
                }
              } else {
                return;
              }
            });
          } else {
            const embed = new Discord.MessageEmbed().setDescription(
              `${bot.users.cache.get(trainer.id)} is already in **${
                data.towerOfMastery.currentGym
              }**!\n They cannot be allowed until they are kicked/removed from there!`
            );
            message.channel.send(embed);
            message.react("❌");
          }
        } else if (data.towerOfMastery.region === "IN") {
          if (
            !data.towerOfMastery.currentGym ||
            data.towerOfMastery.currentGym === ""
          ) {
            IN.find((o, i) => {
              if (message.member.roles.cache.has(o.gymRoleID)) {
                if (message.channel.id === "884909041724325889") {
                  challengerRole = message.guild.roles.cache.find(
                    (r) => r.id === IN[i].gymChallengerRoleID
                  );
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(
                      trainer.id
                    )} has been added to your gym!`
                  );
                  message.channel.send(embed);
                  message.react("✅");
                  message.client.channels.cache
                    .get(IN[i].gymChannelID)
                    .send(
                      `${trainer}` +
                        ` is here! Please time your matches with ${IN[i].gymRoleIDTag} and have fun :)) GL! 🔥`
                    );
                  data.towerOfMastery.currentGym = `${IN[i].gymRoleName}`;
                  data.save().catch((err) => console.log(err));
                  trainer.roles.add(challengerRole);
                  return true; // stop searching
                } else {
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(
                      leader.id
                    )} Use the allow command in <#884909041724325889> for IN!`
                  );
                  message.channel.send(embed);
                  message.react("❌");
                  return;
                }
              } else {
                return;
              }
            });
          } else {
            const embed = new Discord.MessageEmbed().setDescription(
              `${bot.users.cache.get(trainer.id)} is already in **${
                data.towerOfMastery.currentGym
              }**!\n They cannot be allowed until they are kicked/removed from there!`
            );
            message.channel.send(embed);
            message.react("❌");
          }
        } else {
          const embed = new Discord.MessageEmbed().setDescription(
            `${bot.users.cache.get(trainer.id)} is registered in ${
              data.towerOfMastery.region
            }, we only have EU and IN launched atm.\n Ask them to change their region if they wanna hit these regions!!`
          );
          message.channel.send(embed);
          message.react("❌");
        }
      }
    }
  );
};

module.exports.help = {
  name: "allow",
  aliases: ["comein", "getin"],
};
