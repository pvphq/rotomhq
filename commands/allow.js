// at the top of your file
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const leader = message.author;
  const trainer = message.mentions.members.first();
  const trainerName = message.mentions.users.first();

  if (message.channel.id === "710921102033158306") {
    if (message.member.roles.cache.has("747032760748736562")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Clock Tower Challenger"
      );
      trainer.send(
        "Welcome to **Clock Tower Gym** \n This is a **Dark/Flying Gym** with **Charm Users** banned! \n Also **Bastiodon, Azu and GFisk** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > MysticDD16: 2341 1905 1154 \n > Astrobolt29: 4229 2995 7109 \n > DeMercifulGod: 0273 9553 0013 \n > Shreyas145: 6083 4013 9024 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("745892218404995155")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Black Mirror Challenger"
      );
      trainer.send(
        "Welcome to **Black Mirror Gym** \n This is a **Poison/Psychic Gym** with **Steel Type Pokemon** banned! \n Also **A-Wak, Altaria and Umbreon** are Blacklisted as well! \n Send Request to the Leaders : \n > Kayne98: 0327 8425 5689 \n > Rahul3507: 7531 8026 3356 \n > Shashwizard: 8202 2877 3527 \n > Whitewalker91: 8490 1956 8295 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("745894420125319168")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Fort Challenger"
      );
      trainer.send(
        "Welcome to **Fort Gym** \n This is a **Water/Ground Gym** with **Grass Type Pokemon** banned! \n Also **A-Raichu, Gallade, Linoone** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > FalcoTCC: 3119 9992 6406 \n > xthunderstorm: 9011 5360 1715 \n > Siddhant9923: 6996 1481 4235 \n > S7Sandy: 5710 8789 9076 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("745931607592009788")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Dark Hail Challenger"
      );
      trainer.send(
        "Welcome to **Dark Hail Gym** \n This is a **Dark/Ice Gym** with **Counter Users** banned! \n Also **Poliwrath, G-Fisk, Azumarill** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > agentJC007: 6470 5620 0764 \n > KKinshuKK07: 0006 7284 9976 \n > Prince33246: 6197 5022 9570 \n > TheTaurian22: 5767 2035 1682 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("745896315694612553")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Sacred City Challenger"
      );
      trainer.send(
        "Welcome to **Sacred City Gym** \n This is a **Steel/Fairy Gym** with **Ground Type Pokemon** banned! \n Also **A-Wak, Vigoroth and Mawile** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > abhi9890: 0424 6386 0356 \n > Abhishek12197: 0832 6287 7239 \n > kaustubhVK07: 3061 8136 0918 \n > Krish6136: 8669 2747 4200 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("745902834402459798")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Virbank City Challenger"
      );
      trainer.send(
        "Welcome to **Virbank City Gym** \n This is a **Poison/Water Gym** with **Electric Type Pokemon** banned! \n Also **Rainy-Cast, Ferrothorn, Meganium** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > Count.Xevious: 3980 2366 9763 \n > BraviorWyvern: 0468 7062 2966 \n > pratt07: 1716 6620 0731 \n > shivkeshav: 5051 6781 0093 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("745933217411891220")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Stronghold Challenger"
      );
      trainer.send(
        "Welcome to **Stronghold Gym** \n This is a **Normal/Steel Gym** with **Counter User Pokemon** banned! \n Also **Medicham,Perserker,Granbull** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > 01Alta: 5905 9113 8294 \n > Shri23: 8809 0492 8302 \n > mightymajesty: 6672 8719 0230 \n > Zubzo: 3073 6289 2321 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("746194512094822460")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Glacial Jungle Challenger"
      );
      trainer.send(
        "Welcome to **Glacial Jungle Gym** \n This is a **Ice/Grass Gym** with **Steel Type Pokemon** banned! \n Also **Castform(Sunny), Hypno, Blaziken** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > Arundrag: 6721 1622 0845 \n > PoketrainerJeet: 9706 5300 9508 \n > SupersaiyaanJoy: 9565 1932 1161 \n > Surajiton: 6321 4156 3006 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("746597884446769173")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Lava Ridge Challenger"
      );
      trainer.send(
        "Welcome to **Lava Ridge Gym** \n This is a **Fire/Ground Gym** with **Water Type Pokemon** banned! \n Also **Dragonair,Drapion,Altaria** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > AdhuPTY: 0211 4449 2619 \n > GaneshRajesh00: 9754 4131 0486 \n > Legitking2704: 3753 4649 7665 \n > TheDarkPosiedon: 6196 2116 8607 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("746599067034976358")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Capital Challenger"
      );
      trainer.send(
        "Welcome to **Capital Gym** \n This is a **Normal/Ghost Gym** with **Dark Type Pokemon** banned! \n Also **Altaria, Skarmory, and Bastiodon** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > AceJumanji: 9058 0082 4458 \n > Apratim0508: 4778 0034 4528 \n > SarcTechie: 4013 8488 7624 \n > Sumatru: 9050 2260 8726 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("746599166641176576")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Ship Wreck Challenger"
      );
      trainer.send(
        "Welcome to **Ship Wreck Gym** \n This is a **Water/Steel Gym** with **Electric Type Pokemon** banned! \n Also **Linoone,Hitmonchan,Hypno** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > debipran: 9634 6722 2371 \n > Kn8m4rE: 4150 7231 7431 \n > Navonil: 1790 0099 2134 \n > KrontenXD: 4604 5478 4570 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else if (message.member.roles.cache.has("745888163938959462")) {
      challengerRole = message.guild.roles.cache.find(
        (r) => r.name === "Viridian Challenger"
      );
      trainer.send(
        "Welcome to **Viridian Gym** \n This is a **Ground/Flying Gym** with **Ice Type Pokemon** banned! \n Also **Azumarill, Cradily and Hypno** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in Viridian Gym! \n Send Request to the Leaders : \n > Gowthamm432 : 9610 6286 2857 \n > sathyaseven : 1760 7600 6292 \n > DarthDesikan : 5568 9436 1369 \n > Krishna3294 : 0923 8038 9971 \n DM the Leaders and schedule a time to battle! GL!"
      );
    } else {
      message.channel.send(
        `Brrt! Qualification Error! ${leader.username} is not a Gym Leader!`
      );
      return;
    }
  } else {
    message.channel.send(
      "Err! Wrong Channel! Use the command in GenChat Boiy!"
    );
    return;
  }

  message.channel.send(
    `**${trainerName.username}** has been added to your Gym!`
  );
  trainer.roles.add(challengerRole);
};

module.exports.help = {
  name: "allow",
  aliases: ["comein"],
};
