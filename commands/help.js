const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("**Rotom HQ Commands**")
    .addField(
      `hq!invite`,
      "Send the Discord Server invite so you can invite more of your friends!"
    )
    .addField(`hq!badges`, "Shows you your Gym Badges Case for ToM S2!")
    .addField(
      `hq!leaderboard`,
      "Shows the Leaderboard of this Season.\nSorted by total number of matches won against Leaders!"
    )
    .addField(
      `hq!challenge <tag Gym Leader>`,
      "Use this command to initiate a challenge in the ToM."
    )
    .addField(
      `hq!allow <tag Challenger>`,
      "Use this command to let Challenger in your Gym."
    )
    .addField(
      `hq!reportwin <tag Challenger>`,
      "**Aliases : hq!rw or hq!beat**\nUse this command to log your defeat by the Challenger."
    )
    .addField(
      `hq!reportloss <tag Challenger>`,
      "**Aliases : hq!rl or hq!defend**\nUse this command to log your victory over the Challenger."
    )
    .addField(
      `hq!awardbadge <tag Challenger>`,
      "Use this command to award the Challenger with your Gym Badge."
    )
    .addField(
      `hq!gymkick <tag Challenger>`,
      "Use this command to remove the Challenger from your Gym. \n"
    )
    .addField(
      "\u200B",
      "**PvP HQ** | [**Server Invite**](https://discord.gg/QEFTu9J) | [**Support**](https://www.buymeacoffee.com/pvphq)"
    )
    .setColor("#D3F8FF");

  message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  aliases: ["helpcommands", "commands"],
};
