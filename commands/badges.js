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
    const BugWater = await Canvas.loadImage("./assets/img/BugWater.png");
    const DarkFlying = await Canvas.loadImage("./assets/img/DarkFlying.png");
    const GhostNormal = await Canvas.loadImage("./assets/img/GhostNormal.png");
    const PoisonElectric = await Canvas.loadImage(
      "./assets/img/PoisonElectric.png"
    );
    const PoisonNormal = await Canvas.loadImage(
      "./assets/img/PoisonNormal.png"
    );
    const SteelGrass = await Canvas.loadImage("./assets/img/SteelGrass.png");
    const SteelPsychic = await Canvas.loadImage(
      "./assets/img/SteelPsychic.png"
    );
    const WaterFlying = await Canvas.loadImage("./assets/img/WaterFlying.png");

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
        message.member.roles.cache.some((role) => role.name === "Zephyr Badge")
      ) {
        ctx.drawImage(SteelPsychic, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Neutral Badge")
      ) {
        ctx.drawImage(PoisonNormal, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Aquabuzz Badge"
        )
      ) {
        ctx.drawImage(BugWater, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Ghoul Badge")
      ) {
        ctx.drawImage(GhostNormal, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Aerial Anchor Badge"
        )
      ) {
        ctx.drawImage(WaterFlying, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some((role) => role.name === "Toxtric Badge")
      ) {
        ctx.drawImage(PoisonElectric, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Iron Rose Badge"
        )
      ) {
        ctx.drawImage(SteelGrass, 0, 0, canvas.width, canvas.height);
      }
      if (
        message.member.roles.cache.some(
          (role) => role.name === "Dementors Badge"
        )
      ) {
        ctx.drawImage(DarkFlying, 0, 0, canvas.width, canvas.height);
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
