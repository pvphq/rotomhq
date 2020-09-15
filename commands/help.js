module.exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("**Rotom HQ Commands**")
    .addField(
      `hq!invite`,
      "**Aliases : hq!server or hq!hq**\nSend the Discord Server invite so you can invite more of your friends!"
    )
    .addField(
      `hq!badges`,
      "**Aliases : hq!badge or hq!gymbadge**\nShows you your Gym Badges Case for ToM S2!"
    )
    .addField(
      `hq!bal`,
      "**Aliases : hq!balance or hq!creds**\nTells you the amount of server credits you have.\nYou can earn the credits by battling in the Tower of Mastery!"
    )
    .addField(
      `hq!wins`,
      "**Aliases : hq!score**\nTells you the amount of wins you have while battling in Season 2!"
    )
    .addField(
      `hq!leaderboard`,
      "**Aliases : hq!lb or hq!top**\nShows the Leaderboard of this Season.\nSorted by total number of matches won against Leaders!"
    )
    .addField(
      `hq!challenge <tag Gym Leader>`,
      "**Aliases : hq!fiteme**\nUse this command to initiate a challenge in the ToM.\nShould only be used in #challenge-gyms to work correctly!"
    )
    .addField(
      `hq!allow <tag Challenger>`,
      "**Aliases : hq!comein**\nUse this command to let Challenger in your Gym.\nShould only be used in #gen-chat to work correctly!\nShould be used only by leaders if the reaction doesn't work!"
    )
    .addField(
      `hq!reportwin <tag Challenger>`,
      "**Aliases : hq!rw or hq!beat**\nUse this command to log your defeat by the Challenger.\nShould only be used in your own Gyms and it adds a win and creds to the Challenger so do not mistake it!"
    )
    .addField(
      `hq!reportloss <tag Challenger>`,
      "**Aliases : hq!rl or hq!defend**\nUse this command to log your victory over the Challenger.\nShould only be used in your own Gyms and it adds a loss to the Challenger so do not mistake it!"
    )
    .addField(
      `hq!awardbadge <tag Challenger>`,
      "**Aliases : hq!givebadge**\nUse this command to award the Challenger with your Gym Badge.\nShould only be used in your own Gyms and it grants the badge and kicks the Challenger so do not mistake it either!\nLog your match before using this command!"
    )
    .addField(
      `hq!gymkick <tag Challenger>`,
      "**Aliases : hq!comeagain**\nUse this command to remove the Challenger from your Gym.\nShould only be used in your own Gyms and it kicks the Challenger so do not mistake it either!\nLog your match before using this command!"
    )
    .setColor("#D3F8FF");

  message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  aliases: ["helpcommands", "commands"],
};
