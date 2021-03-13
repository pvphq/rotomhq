// at the top of your file
const Discord = require("discord.js");
const GymData = require("../data/gym");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const trainer = message.mentions.members.first();
  const trainerName = message.mentions.users.first();
  const holdRole = message.guild.roles.cache.find((r) => r.name === "OnHold");

  if (message.channel.id === "818829790583848990") {
    GymData.find((o, i) => {
      if (message.member.roles.cache.has(o.gymRoleID)) {
        challengerRole = message.guild.roles.cache.find(
          (r) => r.id === GymData[i].gymChallengerRoleID
        );

        message.react("✅");

        const kickEmbed = new Discord.MessageEmbed()
          .setColor("#daffe7")
          .addFields({
            value: `Come back after 2 weeks from this message!`,
            name: `**${trainerName.username}** has been defeated by **${leader.username}** in ${GymData[i].gymName}`,
            inline: true,
          })
          .setTimestamp();

        message.client.channels.cache.get("818871238390317067").send(kickEmbed);
        message.channel.send(
          `**${trainerName.username}** has been removed from the Gym!`
        );
        trainer.send(
          `You have been removed from ${GymData[i].gymName}, Please rechallenge only after 2 weeks of this meassage! GL!`
        );

        trainer.roles.remove(challengerRole);
        trainer.roles.remove(holdRole);
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
  name: "gymkick",
  aliases: ["comeagain"],
};
