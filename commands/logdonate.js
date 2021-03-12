const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
  console.log(user);

  const embed = new Discord.MessageEmbed()
    .setColor("#FCE100")
    .addFields({
      value: `You are now an HQ Supporter! ✅`,
      name: `💝 Thankyou for donating to **PvP HQ**, ${user.username}!`,
      inline: true,
    })
    .setTimestamp();

  message.client.channels.cache
    .get("819952657442537523")
    .send(`<@${user.id}>`, embed);
};

module.exports.help = {
  name: "logdonate",
  aliases: ["logdonation"],
};
