const Discord = require("discord.js");
const mongoose = require("mongoose");
const client = new Discord.Client();

//Connect to db
mongoose.connect(process.env.mongoPass, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MODELS
const User = require("../models/user.js");
const EU = require("../data/EUGymData");

module.exports.run = async (bot, message, args) => {
  let user = message.author;
  let gym = message.mentions.roles.first();
  const holdRole = message.guild.roles.cache.find((r) => r.name === "OnHold");

  User.findOne(
    {
      discordId: user.id,
    },
    (err, data) => {
      if (err) console.log(err);
      if (!data) {
        const embed = new Discord.MessageEmbed().setDescription(
          `${bot.users.cache.get(
            user.id
          )}, you haven't registered yet! <:HQ:741349932086198304>\n Login on the website to register for ToM!`
        );
        message.channel.send(embed);
        message.react("❌");
        return;
      } else {
        if (!data.towerOfMastery.region) {
          const embed = new Discord.MessageEmbed().setDescription(
            `${bot.users.cache.get(
              user.id
            )}, looks like you haven't set your region yet!\n Go to <#717681173152661544> and use the **hq!setregion** command!`
          );
          message.channel.send(embed);
          message.react("❌");
          return;
        } else if (data.towerOfMastery.region === "EU") {
          if (message.channel.id !== "882106845278388234") {
            const embed = new Discord.MessageEmbed().setDescription(
              `${bot.users.cache.get(
                user.id
              )} Use the challenge command in <#882106845278388234> for EU <:EU:870766537580118066>!`
            );
            message.channel.send(embed);
            message.react("❌");
            return;
          } else {
            if (gym) {
              EU.find((o, i) => {
                if (o.gymRoleName === gym.name) {
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${user} has challenged the Gym! ${EU[i].gymRoleIDTag}`
                  );
                  message.client.channels.cache
                    .get(EU[i].gymChannelID)
                    .send(embed);
                  message.react("✅");

                  const filter = (reaction, leader) => {
                    return (
                      ["✅"].includes(reaction.emoji.name) &&
                      (leader.id === EU[i].leader1ID ||
                        leader.id === EU[i].leader2ID ||
                        leader.id === EU[i].leader3ID ||
                        leader.id === EU[i].leader4ID ||
                        leader.id === "271234466993799180")
                    );
                  };

                  message
                    .awaitReactions(filter, { max: 1, time: 3000000 })
                    .then((collected) => {
                      const reaction = collected.first();
                      let role = message.guild.roles.cache.find(
                        (r) => r.id === EU[i].gymChallengerRoleID
                      );
                      let member = message.member;

                      if (reaction.emoji.name === "✅") {
                        message.client.channels.cache
                          .get(EU[i].gymChannelID)
                          .send(
                            `${user}` +
                              ` is here! Please time your matches with ${EU[i].gymRoleIDTag} and have fun :)) GL! 🔥`
                          );
                        data.towerOfMastery.currentGym = `${EU[i].gymRoleName}`;
                        data.save().catch((err) => console.log(err));
                        member.roles.add(role).catch(console.error);
                        member.roles.add(holdRole);
                      } else {
                        console.log("you reacted with a thumbs down.");
                      }
                    })
                    .catch((collected) => {
                      console.log(error);
                    });

                  return true; // stop searching
                }
              });
            } else {
              const embed = new Discord.MessageEmbed().setDescription(
                `${bot.users.cache.get(
                  user.id
                )}, mention a Gym in your challenge!`
              );
              message.channel.send(embed);
              message.react("❌");
            }
          }
        } else {
          const embed = new Discord.MessageEmbed().setDescription(
            `${bot.users.cache.get(
              user.id
            )}, to challenge EU Gyms your region must be set to EU! \n Use the **hq!setregion EU** command in <#717681173152661544> to do so! <:EU:870766537580118066>`
          );
          message.channel.send(embed);
          message.react("❌");
        }
      }
    }
  );
};

module.exports.help = {
  name: "challenge",
  aliases: ["fiteme"],
};
