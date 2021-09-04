const Discord = require("discord.js");

const EU = require("../data/EUGymData");

module.exports.run = async (bot, message, args) => {
  var user = message.author;

  const attachment = new Discord.MessageAttachment(
    "./assets/img/logo.png",
    "sample.png"
  );

  if (args[0] === "EU") {
    const embed = new Discord.MessageEmbed()
    .setTitle("Tower of Mastery: EU Status")
    .setColor("#90c9ff")
    .setTimestamp()
    .attachFiles(attachment)
    .setFooter("PvP HQ", "attachment://sample.png");
    
  EU.forEach((i) => {
    const Role = message.guild.roles.cache.get(i.gymChallengerRoleID);
    const Members = Role.members.size;
    embed.addField(
      `${i.gymRoleName} <:EU:870766537580118066>`,
      `${Members} challengers`
    );
  });

  message.channel.send(embed);

  } else {
    const embed = new Discord.MessageEmbed().setDescription(
      `${bot.users.cache.get(
        user.id
      )}, you have to pick EU region at the moment! <:HQ:741349932086198304>`
    );

  message.channel.send(embed);

  }
};

module.exports.help = {
  name: "status",
  aliases: ["stat"],
};
