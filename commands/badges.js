const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports.run = async (bot, message, args) => {
  try {
    const canvas = Canvas.createCanvas(900, 350);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("./assets/img/Recta.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Select the color of the stroke
    ctx.strokeStyle = "#74037b";
    // Draw a rectangle with the dimensions of the entire canvas
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const lavaridge = await Canvas.loadImage("./assets/img/pyro.png");
    const fort = await Canvas.loadImage("./assets/img/Fort.png");
    const rust = await Canvas.loadImage("./assets/img/gallium.png");
    const tornado = await Canvas.loadImage("./assets/img/tornado.png");
    const fairy = await Canvas.loadImage("./assets/img/fairy.png");
    const tundra = await Canvas.loadImage("./assets/img/icegrass.png");
    const normal = await Canvas.loadImage("./assets/img/normal.png");
    const sini = await Canvas.loadImage("./assets/img/sini.png");
    const eclipse = await Canvas.loadImage("./assets/img/eclipse.png");
    const darkice = await Canvas.loadImage("./assets/img/darkice.png");
    const toxic = await Canvas.loadImage("./assets/img/toxic.png");
    const earth = await Canvas.loadImage("./assets/img/viridian.png");

    try {
      if (
        message.member.roles.cache.some((role) => role.name === "Lava Badge")
      ) {
        ctx.drawImage(lavaridge, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Toxic Badge")
      ) {
        ctx.drawImage(toxic, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Horizon Badge")
      ) {
        ctx.drawImage(earth, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Twilight Badge"
        )
      ) {
        ctx.drawImage(darkice, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Hysteria Badge"
        )
      ) {
        ctx.drawImage(eclipse, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Swag Badge")
      ) {
        ctx.drawImage(sini, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Stronghold Badge"
        )
      ) {
        ctx.drawImage(normal, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Boreal Badge")
      ) {
        ctx.drawImage(tundra, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Sacred Badge")
      ) {
        ctx.drawImage(fairy, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Tornado Badge")
      ) {
        ctx.drawImage(tornado, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Rust Badge")
      ) {
        ctx.drawImage(rust, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Fort Badge")
      ) {
        ctx.drawImage(fort, 0, 0, canvas.width, canvas.height);
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
