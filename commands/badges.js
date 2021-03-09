const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports.run = async (bot, message, args) => {
  try {
    const canvas = Canvas.createCanvas(1920, 1080);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("./assets/img/Recta.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Select the color of the stroke
    ctx.strokeStyle = "#74037b";
    // Draw a rectangle with the dimensions of the entire canvas
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const badge1 = await Canvas.loadImage("./assets/img/Grunt.png");
    const badge2 = await Canvas.loadImage("./assets/img/NoLag.png");
    const badge3 = await Canvas.loadImage("./assets/img/Zephyr.png");
    const badge4 = await Canvas.loadImage("./assets/img/Mumbai.png");
    const badge5 = await Canvas.loadImage("./assets/img/Cursed.png");
    const badge6 = await Canvas.loadImage("./assets/img/Charcoal.png");
    const badge7 = await Canvas.loadImage("./assets/img/Chennai.png");
    const badge8 = await Canvas.loadImage("./assets/img/AllStars.png");

    try {
      if (
        message.member.roles.cache.some((role) => role.name === "Grunt Badge")
      ) {
        ctx.drawImage(badge1, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "No Lag Badge")
      ) {
        ctx.drawImage(badge2, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Zephyr Badge")
      ) {
        ctx.drawImage(badge3, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Mind Palace Badge"
        )
      ) {
        ctx.drawImage(badge4, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Cursed Platinum Badge"
        )
      ) {
        ctx.drawImage(badge5, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Charcoal Badge"
        )
      ) {
        ctx.drawImage(badge6, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Love Dust Badge"
        )
      ) {
        ctx.drawImage(badge7, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Turbulent Badge"
        )
      ) {
        ctx.drawImage(badge8, 0, 0, canvas.width, canvas.height);
      }
    } catch (error) {
      console.log(" ");
    }
    const attachment = new Discord.MessageAttachment(canvas.toBuffer());

    message.channel.send(
      `Hello Trainer **${message.author.username}**! Here are your badges!`,
      attachment
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports.help = {
  name: "badges",
  aliases: ["badge", "gymbadge"],
};
