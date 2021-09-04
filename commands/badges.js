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

    const DarkPoison = await Canvas.loadImage("./assets/img/DarkPoison.png");
    const DragonSteel = await Canvas.loadImage("./assets/img/DragonSteel.png");
    const GroundFlying = await Canvas.loadImage(
      "./assets/img/GroundFlying.png"
    );
    const NormalGhost = await Canvas.loadImage("./assets/img/NormalGhost.png");
    const NormalPsychic = await Canvas.loadImage(
      "./assets/img/NormalPsychic.png"
    );
    const PoisonFighting = await Canvas.loadImage(
      "./assets/img/PoisonFighting.png"
    );
    const WaterGrass = await Canvas.loadImage("./assets/img/WaterGrass.png");
    const WaterPoison = await Canvas.loadImage("./assets/img/WaterPoison.png");

    try {
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Belladonna Badge"
        )
      ) {
        ctx.drawImage(DarkPoison, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Poltergeist Badge"
        )
      ) {
        ctx.drawImage(NormalGhost, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Time Badge")
      ) {
        ctx.drawImage(DragonSteel, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Friet Badge")
      ) {
        ctx.drawImage(WaterGrass, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Melody Badge")
      ) {
        ctx.drawImage(NormalPsychic, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Patanisca Badge"
        )
      ) {
        ctx.drawImage(GroundFlying, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Tsari Badge")
      ) {
        ctx.drawImage(PoisonFighting, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Venom Badge")
      ) {
        ctx.drawImage(WaterPoison, 0, 0, canvas.width, canvas.height);
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
