// at the top of your file
const Discord = require("discord.js");
const mongoose = require("mongoose");
// const botconfig = require("../botconfig.json");

//Connect to db
mongoose.connect(process.env.mongoPass || botconfig.mongoPass, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MODELS
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
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

  message.client.channels.cache
    .get("750059353691914361")
    .send(
      `**${trainerName}** failed to defeat **${leader}** in ${message.channel}`
    );

  {
    let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    if (!user) return message.reply("Sorry, that user is not registered yet!");

    Data.findOne(
      {
        userID: user.id,
      },

      (err, userData) => {
        if (err) console.log(err);

        if (!userData) {
          const newData = new Data({
            name: bot.users.cache.get(user.id).username,
            userID: user.id,
            lb: "all",
            creds: 0,
            wins: 0,
            losses: 1,
          });
          newData.save().catch((err) => console.log(err));
        } else {
          userData.losses += 1;
          userData.save().catch((err) => console.log(err));
        }
      }
    );
  }
};

module.exports.help = {
  name: "reportloss",
  aliases: ["rl"],
};
