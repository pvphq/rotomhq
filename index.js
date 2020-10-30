const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
// const botconfig = require("./botconfig.json");
const fs = require("fs");
const Canvas = require("canvas");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

//Read commands folder
fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldnt find any command");
    return;
  }

  jsfile.forEach((f) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

    props.help.aliases.forEach((alias) => {
      bot.aliases.set(alias, props.help.name);
    });
  });
});

//Activity and Ready
bot.on("ready", async () => {
  console.log("Bot Ready!");
  bot.user.setActivity("with myself.");
});

bot.on("guildMemberAdd", member => {
  member.guild.channels.cache
    .get("713713610706255932")
    .send(
      "Welcome <@" +
        member.user.id +
        ">. \nWelcome to PvP HQ! Get suitable roles from <#741086632282816562> \nand read the rules from <#717672417044201472> \nEnjoy your battles in here!"
    );
});

bot.on("message", async (message) => {
  // Check Channel Type
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;

  //Prefix
  let prefix = process.env.prefix || botconfig.prefix || process.env.prefix2;

  //Check PREFIX and Define ARGS AND COMMANDS
  if (!message.content.startsWith(prefix)) return;
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd;
  cmd = args.shift().toLowerCase();
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);

  //Run Commands
  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    command = bot.commands.get(bot.aliases.get(cmd));
  } else if (cmd != bot.commands) {
    message.channel.send("Wrong command bruh! Check commands plis!");
    return;
  }
  try {
    command.run(bot, message, args);
  } catch (e) {
    return;
  }
});

bot.login(process.env.token || botconfig.token);
