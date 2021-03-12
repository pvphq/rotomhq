module.exports.run = async (bot, message, args) => {
  let gym = message.mentions.roles.first();
  const GymData = require("../data/gym");

  if (gym) {
    GymData.find((o, i) => {
      if (o.gymRoleName === gym.name) {
        const Role = message.guild.roles.cache.get(
          GymData[i].gymChallengerRoleID
        );
        const Members = Role.members.size;
        message.channel.send(
          `${Members} challengers are in line to battle ${GymData[i].gymRoleName}`
        );
      }
    });
  } else {
    message.channel.send("Mention a Gym to know status");
  }
};

module.exports.help = {
  name: "status",
  aliases: ["stat"],
};
