// at the top of your file
const Discord = require("discord.js");
//MODELS
const GymData = require("../data/gym");
module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const trainer = message.mentions.members.first();
  const trainerName = message.mentions.users.first();
  const holdRole = message.guild.roles.cache.find((r) => r.name === "OnHold");

  if (message.channel.id === "818829790583848990") {
    GymData.find((o, i) => {
      if (message.member.roles.cache.has(o.gymRoleID)) {
        badge = `${GymData[i].badgeName} 🥇`;
        challengerRole = message.guild.roles.cache.find(
          (r) => r.id === `${GymData[i].gymChallengerRoleID}`
        );
        badgeRole = message.guild.roles.cache.find(
          (r) => r.name === `${GymData[i].badgeName}`
        );
        message.react("✅");

        const awardEmbed = new Discord.MessageEmbed()
          .setColor("#daffe7")
          .addFields({
            value: `You have been awarded the **${badge}** by **${leader.username}**.`,
            name: `🎉 Congratulations on defeating the ${GymData[i].gymRoleName}, **${trainerName.username}**`,
            inline: true,
          })
          .setTimestamp();

        message.client.channels.cache
          .get("818860808699379752")
          .send(awardEmbed);
        message.channel.send(
          `${badge} has been awarded to ${trainerName} by ${leader}`
        );
        trainer.roles.add(badgeRole);
        trainer.roles.remove(challengerRole);
        trainer.roles.remove(holdRole);
        return true; // stop searching
      } else {
        return;
      }
    });
  } else {
    message.channel.send(
      "Please use <#747664537699876927> for Challenges, GL!"
    );
    message.react("❌");
  }
};

module.exports.help = {
  name: "awardbadge",
  aliases: ["givebadge"],
};
