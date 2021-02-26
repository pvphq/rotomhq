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
  if (!args[0]) {
    var user = message.author;
  } else {
    var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
  }

  Data.findOne(
    {
      userID: user.id,
    },
    (err, data) => {
      if (err) console.log(err);
      if (!data) {
        const newData = new Data({
          name: bot.users.cache.get(user.id).username,
          userID: user.id,
          lb: "all",
          creds: 0,
          wins: 0,
          losses: 0,
        });
        newData.save().catch((err) => console.log(err));
        return message.channel.send(
          `${bot.users.cache.get(user.id)} has 0 credits.`
        );
      } else {
        return message.channel.send(
          `${bot.users.cache.get(user.id)} has ${data.creds} credits.`
        );
      }
    }
  );
};

module.exports.help = {
  name: "creds",
  aliases: ["bal", "balance", "credits"],
};
