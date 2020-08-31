module.exports.run = async (bot, message, args) => {
  message.channel.send(
    `Welcome to **${message.guild.name}**\nNumber of PvP'er in here: ${message.guild.memberCount}\nInvite to Server: https://discord.gg/QEFTu9J\n`
  );
};

module.exports.help = {
  name: "server",
  aliases: ["invite"],
};
