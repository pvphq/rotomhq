// at the top of your file
const Discord = require("discord.js");

//MODELS
const GymData = require("../data/gym");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const holdRole = message.guild.roles.cache.find((r) => r.name === "OnHold");
  const trainer = message.mentions.members.first();
  const trainerName = message.mentions.users.first();

  if (message.channel.id === "818829790583848990") {
    GymData.find((o, i) => {
      if (message.member.roles.cache.has(o.gymRoleID)) {
        challengerRole = message.guild.roles.cache.find(
          (r) => r.id === GymData[i].gymChallengerRoleID
        );
        trainer.send(
          `Welcome to **${GymData[i].gymName}** \n This is a **${GymData[i].gymTypings}** gym with **${GymData[i].typeBan}** Pokemon banned! \n Also **${GymData[i].speciesBan}** are Banned! \n Also **${GymData[i].otherBans}** are not allowed in this Gym! \n Send Request to the Leaders : \n > ${GymData[i].leader1Name} : ${GymData[i].leader1TC} \n > ${GymData[i].leader2Name} : ${GymData[i].leader2TC} \n > ${GymData[i].leader3Name} : ${GymData[i].leader3TC} \n > ${GymData[i].leader4Name} : ${GymData[i].leader4TC} \n \n DM the Leaders and schedule a time to battle! GL!`
        );
        message.channel.send(
          `**${trainerName.username}** has been added to your Gym!`
        );
        message.client.channels.cache
          .get(GymData[i].gymChannelID)
          .send(
            `${trainer}` +
              ` is here! Please time your matches with ${GymData[i].gymRoleIDTag} and have fun :)) GL! 🔥`
          );
        trainer.roles.add(challengerRole);
        trainer.roles.add(holdRole);
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
  name: "allow",
  aliases: ["comein"],
};
