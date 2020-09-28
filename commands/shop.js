const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("**PvP HQ Shop**")
    .setDescription("**Contact @Admin to buy from shop!**")
    .addField(
      `1. Time Capsule`,
      "`80 Credits`\nA Rare Item that takes you back in time and reduces your cooldown to 1 day!\nCan be bought once every 3 days!"
    )
    .addField(
      `2. Metal Ticket`,
      "`250 Credits`\nA Ticket to gain the Elusive Meltan Mystery Box!\nCan be bought once every 3 days!"
    )
    .addField(
      `3. Elite Time Capsule`,
      "`150 Credits`\nA Rare Item that takes you back in time and reduces your cooldown to 1 day in the Elite Challenge!\nCan be bought once every 3 days!"
    )
    .addField(
      `4. Custom Emote`,
      "`50 Credits`\nSend in a custom emote you want in the server!"
    )
    .setColor("#D3F8FF");

  message.channel.send(embed);
};

module.exports.help = {
  name: "shop",
  aliases: ["market", "s"],
};
