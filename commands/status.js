const Discord = require("discord.js");

const GymData = require("../data/gym");

module.exports.run = async (bot, message, args) => {
  const attachment = new Discord.MessageAttachment(
    "./assets/img/logo.png",
    "sample.png"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Tower of Mastery: Gyms Status")
    .setColor("#ff8b00")
    .setTimestamp()
    .attachFiles(attachment)
    .setFooter("PvP HQ", "attachment://sample.png");
  GymData.forEach((i) => {
    const Role = message.guild.roles.cache.get(i.gymChallengerRoleID);
    const Members = Role.members.size;
    embed.addField(
      `${i.gymRoleName} ${i.badgeEmote}`,
      `$**{Members}** challengers`
    );
  });
  message.channel.send(embed);
};

module.exports.help = {
  name: "status",
  aliases: ["stat"],
};
