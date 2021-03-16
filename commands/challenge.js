const Discord = require("discord.js");
const client = new Discord.Client();

//MODELS
const GymData = require("../data/gym");

module.exports.run = async (bot, message, args) => {
  let user = message.author;
  let gym = message.mentions.roles.first();
  const holdRole = message.guild.roles.cache.find((r) => r.name === "OnHold");

  if (message.channel.id === "817868581043830794") {
    if (gym) {
      GymData.find((o, i) => {
        if (o.gymRoleName === gym.name) {
          const embed = new Discord.MessageEmbed().setDescription(
            `${user} has challenged the Gym! ${GymData[i].gymRoleIDTag}`
          );
          message.client.channels.cache
            .get(GymData[i].gymChannelID)
            .send(embed);
          message.react("✅");

          const filter = (reaction, leader) => {
            return (
              ["✅"].includes(reaction.emoji.name) &&
              (leader.id === GymData[i].leader1ID ||
                leader.id === GymData[i].leader2ID ||
                leader.id === GymData[i].leader3ID ||
                leader.id === GymData[i].leader4ID ||
                leader.id === "271234466993799180")
            );
          };

          message
            .awaitReactions(filter, { max: 1, time: 3000000 })
            .then((collected) => {
              const reaction = collected.first();
              let role = message.guild.roles.cache.find(
                (r) => r.id === GymData[i].gymChallengerRoleID
              );
              let member = message.member;

              if (reaction.emoji.name === "✅") {
                message.author.send(
                  `Welcome to **${GymData[i].gymName}** \n This is a **${GymData[i].gymTypings}** gym with **${GymData[i].typeBan}** Pokemon banned! \n Also **${GymData[i].speciesBan}** are Banned! \n Also **${GymData[i].otherBans}** are not allowed in this Gym! \n Send Request to the Leaders : \n > ${GymData[i].leader1Name} : ${GymData[i].leader1TC} \n > ${GymData[i].leader2Name} : ${GymData[i].leader2TC} \n > ${GymData[i].leader3Name} : ${GymData[i].leader3TC} \n > ${GymData[i].leader4Name} : ${GymData[i].leader4TC} \n \n DM the Leaders and schedule a time to battle! GL!`
                );
                message.client.channels.cache
                  .get(GymData[i].gymChannelID)
                  .send(
                    `${user}` +
                      ` is here! Please time your matches with ${GymData[i].gymRoleIDTag} and have fun :)) GL! 🔥`
                  );
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
      message.channel.send("Mention a Gym in your Challenge");
      message.react("❌");
    }
  } else {
    message.channel.send(
      "Please use <#747664537699876927> for Challenges, GL!"
    );
    message.react("❌");
  }
};

module.exports.help = {
  name: "challenge",
  aliases: ["fiteme"],
};
