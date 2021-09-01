const Discord = require("discord.js");
const mongoose = require("mongoose");
// const botconfig = require("../botconfig.json");

//Connect to db
mongoose.connect(process.env.mongoPass, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MODELS
const User = require("../models/user.js");

module.exports.run = async (bot, message, args) => {
    var user = message.author;
  if (!args[0]) {
    const embed = new Discord.MessageEmbed().setDescription(
              `${bot.users.cache.get(user.id)} Use the right command <:HQ:741349932086198304>!\n For example: **hq!forcesetregion EU** / **hq!fsetr NA**`
            );
    message.channel.send(embed); 
                message.react("❌");  
                return;
  } else {
    User.findOne(
        {
          discordId: user.id,
        },
        (err, data) => {
          if (err) console.log(err);
          if (!data) {
            const embed = new Discord.MessageEmbed().setDescription(
              `${bot.users.cache.get(user.id)}, you haven't registered yet! <:HQ:741349932086198304>`
            );
            message.channel.send(embed); 
                message.react("❌");  
                return;
          } else {
              if (args[0] === "EU") {
                  data.towerOfMastery.region = "EU";
                  data.save().catch((err) => console.log(err));
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(user.id)}, you have set your region for *Tower of Mastery* to **Europe** <:EU:870766537580118066>!`
                  );
                  message.channel.send(embed); 
                  message.react("✅"); 
                  return;
                } else if (args[0] === "NA") {
                  data.towerOfMastery.region = "NA";
                  data.save().catch((err) => console.log(err));
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(user.id)}, you have successfully set your region for *Tower of Mastery* to **North America** <:NA:870766370512597002>!`
                  );
                  message.channel.send(embed); 
                  message.react("✅"); 
                  return;
                }else if (args[0] === "LATAM") {
                  data.towerOfMastery.region = "LATAM";
                  data.save().catch((err) => console.log(err));
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(user.id)}, you have successfully set your region for *Tower of Mastery* to **Latin America** <:LATAM:870766416243089438>!`
                  );
                  message.channel.send(embed); 
                  message.react("✅"); 
                  return;
                }else if (args[0] === "IN") {
                  data.towerOfMastery.region = "IN";
                  data.save().catch((err) => console.log(err));
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(user.id)}, you have successfully set your region for Tower of Mastery to ***India***!`
                  );
                  message.channel.send(embed); 
                  message.react("✅"); 
                  return;
                }else if (args[0] === "APAC") {
                  data.towerOfMastery.region = "APAC";
                  data.save().catch((err) => console.log(err));
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(user.id)}, you have successfully set your region for *Tower of Mastery* to **Asia Pacific** <:APAC:870766488418660402>!`
                  );
                  message.channel.send(embed); 
                  message.react("✅"); 
                  return;
                } else {
                  const embed = new Discord.MessageEmbed().setDescription(
                    `${bot.users.cache.get(user.id)}, you have to pick one of EU/NA/LATAM/IN/APAC regions! <:HQ:741349932086198304>`
                  );
                  message.channel.send(embed); 
                  message.react("❌"); 
                return;
                }}
        }
      );
  }
};

module.exports.help = {
  name: "forcesetregion",
  aliases: ["fsetr"],
};
