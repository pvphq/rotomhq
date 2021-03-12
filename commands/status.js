module.exports.run = async (bot, message, args) => {
  const leaderChannel = message.channel.id;
  let gym = message.mentions.roles.first();
  let Members;
  const GymData = require("../data/gym");
 


  if (gym) {
    GymData.find((o, i) => {
      if (o.gymRoleName === gym.name) {

        const Role = message.guild.roles.cache.get(GymData[i].gymChallengerRoleID);
        Members = Role.members.size;
        message.channel.send(`${Members} challengers are in line to battle ${GymData[i].gymRoleName}`)
        
      }
    });
  } else {
    message.channel.send("Mention a Gym to know status");
  }
}

/*

  if (leaderChannel =='716746431729238077')  {
    const Role = message.guild.roles.cache.find(role => role.id == '815952410018578442');
   console.log(Role.members.size)  
  }
  else if (leaderChannel =='816773343625085018')  {
    const Role = message.guild.roles.cache.find(role => role.id == '815952296512847893');
    const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
  }
  else if (leaderChannel =='816773424596385792')  {
    const Role = message.guild.roles.cache.find(role => role.id == '815952333476855808');
    const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
  }
  else if (leaderChannel =='816773480766767144')  {
    const Role = message.guild.roles.cache.find(role => role.id == '815952372080574474');
    const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
  }
  else if (leaderChannel =='816773539675111434')  {
    const Role = message.guild.roles.cache.find(role => role.id == '815952410018578442');
    const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
  }
  else if (leaderChannel =='816773591475421264')  {
    const Role = message.guild.roles.cache.find(role => role.id == '815952452926046238');
    const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
  }
  else if (leaderChannel == '816773649600086046')  {
    const Role = message.guild.roles.cache.find(role => role.id == '815952537973686352');
    const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
  }
  else if (leaderChannel =='816773707426037771')  {
    const Role = message.guild.roles.cache.find(role => role.id == '815952586205036605');
    const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
  }
  else {
    message.channel.send(`Noob use thy leader channel for stats`)
  }

 // message.channel.send( Members + ' are in the hopes of conquering ' + leaderChannel)
  };

*/
  
  module.exports.help = {
    name: "status",
    aliases: ["stat"],
  };