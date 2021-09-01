const Discord = require("discord.js");
const mongoose = require("mongoose");
// const botconfig = require("../botconfig.json");

//Connect to db
mongoose.connect(process.env.mongoPass, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function winRate(w, l) {
  return w * (w / (w + l)); // The function returns the product of p1 and p2
}

//MODELS
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) => {
  Data.find({
    lb: "all",
  })
    .sort([["leaderwins", "descending"]])
    .exec((err, res) => {
      if (err) console.log(err);

      var page = Math.ceil(res.length / 10);

      let embed = new Discord.MessageEmbed();
      embed.setTitle("LEADERBOARD : TOWER OF MASTERY S3");
      embed.attachFiles(["./assets/img/logo1.png"]);
      embed.setThumbnail("attachment://logo1.png");
      embed.setTimestamp();

      let pg = parseInt(args[0]);
      if (pg != Math.floor(pg)) pg = 1;
      if (!pg) pg = 1;
      let end = pg * 10;
      let start = pg * 10 - 10;

      if (res.length === 0) {
        embed.addField("Error", "No pages found!");
      } else if (res.length <= start) {
        embed.addField("Error", "Page Not Found!");
      } else if (res.length <= end) {
        embed.setFooter(`Page ${pg} of ${page}`);
        for (i = start; i < res.length; i++) {
          embed.addField(
            `#${i + 1}. ${res[i].name}`,
            `${res[i].leaderwins.toLocaleString()} - ${res[
              i
            ].leaderlosses.toLocaleString()}!`
          );
        }
      } else {
        embed.setFooter(`Page ${pg} of ${page}`);
        for (i = start; i < end; i++) {
          embed.addField(
            "\u200B",
            `**#${i + 1}.** ${res[i].name} : **${parseFloat(
              parseFloat(
                winRate(res[i].leaderwins, res[i].leaderlosses).toFixed(1)
              )
            )}** points.`
          );
        }
      }

      message.channel.send(embed);
    });
};

module.exports.help = {
  name: "leaderlb",
  aliases: ["llb", "leadertop"],
};
