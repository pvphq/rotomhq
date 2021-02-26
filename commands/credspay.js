const mongoose = require("mongoose");
// const botconfig = require("../botconfig.json");

//Connect to db
mongoose.connect(process.env.mongoPass, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MODELS
const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
  if (message.author.id != ("271234466993799180" || "540838426484801536"))
    return message.reply("you're not an admin, are you boy?");
  if (!user) return message.reply("Sorry, that user is not registered yet!");

  Data.findOne(
    {
      userID: message.author.id,
    },
    (err, authorData) => {
      if (err) console.log(err);
      if (!authorData) {
        return message.reply("You got no money to pay!");
      } else {
        Data.findOne(
          {
            userID: user.id,
          },
          (err, userData) => {
            if (err) console.log(err);

            if (!args[1])
              return message.reply("You need to specify how much dude!");

            if (args[1] != Math.floor(args[1]))
              return message.reply("Oof! Enter only whole numbers there boiy!");

            if (!userData) {
              const newData = new Data({
                name: bot.users.cache.get(user.id).username,
                userID: user.id,
                lb: "all",
                creds: parseInt(args[1]),
                wins: 0,
                losses: 0,
              });
              newData.save().catch((err) => console.log(err));
            } else {
              userData.creds += parseInt(args[1]);
              userData.save().catch((err) => console.log(err));
            }

            return message.channel.send(
              `${message.author.username}, you just added ${args[1]} credits to ${user}, now they have ${userData.creds} credits.`
            );
          }
        );
      }
    }
  );
};

module.exports.help = {
  name: "credspay",
  aliases: ["cp"],
};
