// at the top of your file
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const trainer = message.mentions.members.first();
  const trainerName = message.mentions.users.first();

  if (message.channel.id == "745888605246980156") {
    if (message.member.roles.cache.has("745888163938959462")) {
      badge = "Horizon Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Viridian Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Horizon Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "745896914133975050") {
    if (message.member.roles.cache.has("745896315694612553")) {
      badge = "Sacred Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Sacred City Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Sacred Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "746599422707892284") {
    if (message.member.roles.cache.has("746599067034976358")) {
      badge = "Swag Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Capital Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Swag Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "745892671582896158") {
    if (message.member.roles.cache.has("745892218404995155")) {
      badge = "Hysteria Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Black Mirror Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Hysteria Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "747051129619218433") {
    if (message.member.roles.cache.has("747032760748736562")) {
      badge = "Tornado Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Clock Tower Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Tornado Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "745894703190245467") {
    if (message.member.roles.cache.has("745894420125319168")) {
      badge = "Wave Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Fort Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Wave Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "745932214587490314") {
    if (message.member.roles.cache.has("745931607592009788")) {
      badge = "Twilight Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Dark Hail Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Twilight Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "745903244647202836") {
    if (message.member.roles.cache.has("745902834402459798")) {
      badge = "Toxic Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Virbank City Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Toxic Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "746194971081834497") {
    if (message.member.roles.cache.has("746194512094822460")) {
      badge = "Boreal Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Glacial Jungle Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Boreal Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "746598164559298610") {
    if (message.member.roles.cache.has("746597884446769173")) {
      badge = "Lava Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Lava Ridge Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Lava Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "746599493989957642") {
    if (message.member.roles.cache.has("746599166641176576")) {
      badge = "Rust Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Ship Wreck Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Rust Badge"
      );
    } else {
      message.channel.send(
        "`You're not a Gym Leader here, apologize right now!`"
      );
      return;
    }
  } else if (message.channel.id == "745937838679261274") {
    if (message.member.roles.cache.has("745933217411891220")) {
      badge = "Stronghold Badge 🥇";
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Stronghold Challenger"
      );
      badgeRole = message.guild.roles.cache.find(
        (r) => r.name === "Stronghold Badge"
      );
    } else {
      message.channel.send("`This ain't your Gym son!`");
      return;
    }
  } else {
    message.channel.send("`You have no powers in this channel :) Noob`");
    return;
  }
  const kickEmbed = new Discord.MessageEmbed()
    .setColor("#daffe7")
    // .attachFiles(["./assets/img/logo1.png"])
    .addFields({
      value: `Come back after atleast 7 Days from this message!`,
      name: `**${trainerName.username}** has been defeated by **${leader.username}** in ${message.channel.name}`,
      inline: true,
    })
    .setTimestamp();
  // .setFooter("\u200B", "attachment://logo1.png");

  message.client.channels.cache.get("750209473955758211").send(kickEmbed);
  message.channel.send(
    `**${trainerName.username}** has been removed from the Gym!`
  );
  trainer.send(
    `You have been removed from ${message.channel.name}, Please rechallenge only after 7 days of this meaase! GL!`
  );

  trainer.roles.remove(challengerRole);
};

module.exports.help = {
  name: "gymkick",
  aliases: ["comeagain"],
};
