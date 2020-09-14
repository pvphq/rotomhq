const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  let user = message.author;
  const holdRole = message.guild.roles.cache.find((r) => r.name === "Onhold");
  if (message.channel.id === "747664537699876927") {
    if (
      message.mentions.roles.some((r) =>
        ["Viridian Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const viridianEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&745888163938959462>"
      );

      message.client.channels.cache
        .get("745888605246980156")
        .send(viridianEmbed);
      message.react("✅");

      const filter = (reaction, viridianleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (viridianleader.id === "271234466993799180" ||
            viridianleader.id === "597163198877270016" ||
            viridianleader.id === "601273227041308693" ||
            viridianleader.id === "601273227041308693")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "745892111852765204"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Viridian Gym** \n This is a **Ground/Flying Gym** with **Ice Type Pokemon** banned! \n Also **Azumarill, Cradily and Hypno** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in Viridian Gym! \n Send Request to the Leaders : \n > Gowthamm432 : 9610 6286 2857 \n > sathyaseven : 1760 7600 6292 \n > DarthDesikan : 5568 9436 1369 \n > Krishna3294 : 0923 8038 9971 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("745888605246980156")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&745888163938959462> and have fun :)) GL! 🔥"
              );
            member.roles.add(role).catch(console.error);
            member.roles.add(holdRole);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Black Mirror Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&745892218404995155>"
      );

      message.client.channels.cache
        .get("745892671582896158")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, blackmirrorleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (blackmirrorleader.id === "496704628457603072" ||
            blackmirrorleader.id === "431478273453850634" ||
            blackmirrorleader.id === "653219840416415744" ||
            blackmirrorleader.id === "601273227041308693")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "745892393475375114"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Black Mirror Gym** \n This is a **Poison/Psychic Gym** with **Steel Type Pokemon** banned! \n Also **A-Wak, Altaria and Umbreon** are Blacklisted as well! \n Send Request to the Leaders : \n > Kayne98: 0327 8425 5689 \n > Rahul3507: 7531 8026 3356 \n > Shashwizard: 8202 2877 3527 \n > Whitewalker91: 8490 1956 8295 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("745892671582896158")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&745892218404995155> and have fun :)) GL! 🔥"
              );
            member.roles.add(role).catch(console.error);
            member.roles.add(holdRole);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Sacred City Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const sacredEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&745896315694612553>"
      );

      message.client.channels.cache.get("745896914133975050").send(sacredEmbed);
      message.react("✅");

      const filter = (reaction, sacredleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (sacredleader.id === "623026756701650946" ||
            sacredleader.id === "638624295039533056" ||
            sacredleader.id === "587618049193148436" ||
            sacredleader.id === "690118563511664757")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "745896470984785940"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Sacred City Gym** \n This is a **Steel/Fairy Gym** with **Ground Type Pokemon** banned! \n Also **A-Wak, Vigoroth and Mawile** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > abhi9890: 0424 6386 0356 \n > Abhishek12197: 0832 6287 7239 \n > kaustubhVK07: 3061 8136 0918 \n > Krish6136: 8669 2747 4200 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("745896914133975050")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&745896315694612553> and have fun :)) GL! 🔥"
              );
            member.roles.add(role).catch(console.error);
            member.roles.add(holdRole);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Capital Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const capitalEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&746599067034976358>"
      );

      message.client.channels.cache
        .get("746599422707892284")
        .send(capitalEmbed);
      message.react("✅");

      const filter = (reaction, capitalleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (capitalleader.id === "641330263921786892" ||
            capitalleader.id === "562216396185010176" ||
            capitalleader.id === "343348176859955200" ||
            capitalleader.id === "189356602883702784")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "746599119803514940"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Capital Gym** \n This is a **Normal/Ghost Gym** with **Dark Type Pokemon** banned! \n Also **Altaria, Skarmory, and Bastiodon** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > AceJumanji: 9058 0082 4458 \n > Apratim0508: 4778 0034 4528 \n > SarcTechie: 4013 8488 7624 \n > Sumatru: 9050 2260 8726 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("746599422707892284")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&746599067034976358> and have fun :)) GL! 🔥"
              );
            member.roles.add(role).catch(console.error);
            member.roles.add(holdRole);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Clock Tower Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&747032760748736562>"
      );

      message.client.channels.cache
        .get("747051129619218433")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, ctleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (ctleader.id === "716559420120629248" ||
            ctleader.id === "271234466993799180" ||
            ctleader.id === "589362542736834560" ||
            ctleader.id === "672734747012628480")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "747033033508388884"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Clock Tower Gym** \n This is a **Dark/Flying Gym** with **Charm Users** banned! \n Also **Bastiodon, Azu and GFisk** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > MysticDD16: 2341 1905 1154 \n > Astrobolt29: 4229 2995 7109 \n > DeMercifulGod: 0273 9553 0013 \n > Shreyas145: 6083 4013 9024 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("747051129619218433")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&747032760748736562> and have fun :)) GL! 🔥"
              );
            member.roles.add(holdRole);
            member.roles.add(role).catch(console.error);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) => ["Fort Gym Leader"].includes(r.name))
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&745894420125319168>"
      );

      message.client.channels.cache
        .get("745894703190245467")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, blackmirrorleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (blackmirrorleader.id === "346840601066471427" ||
            blackmirrorleader.id === "636091262994350111" ||
            blackmirrorleader.id === "602757369071534093" ||
            blackmirrorleader.id === "367748690938691584")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "745894472931475527"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Fort Gym** \n This is a **Water/Ground Gym** with **Grass Type Pokemon** banned! \n Also **A-Raichu, Gallade, Linoone** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > FalcoTCC: 3119 9992 6406 \n > xthunderstorm: 9011 5360 1715 \n > Siddhant9923: 6996 1481 4235 \n > S7Sandy: 5710 8789 9076 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("745894703190245467")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&745894420125319168> and have fun :)) GL! 🔥"
              );
            member.roles.add(holdRole);
            member.roles.add(role).catch(console.error);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Dark Hail Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&745931607592009788>"
      );

      message.client.channels.cache
        .get("745932214587490314")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, blackmirrorleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (blackmirrorleader.id === "608547246811906070" ||
            blackmirrorleader.id === "428539137310720000" ||
            blackmirrorleader.id === "525246698059071488" ||
            blackmirrorleader.id === "521423465765535756")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "745931881039790090"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Dark Hail Gym** \n This is a **Dark/Ice Gym** with **Counter Users** banned! \n Also **Poliwrath, G-Fisk, Azumarill** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > agentJC007: 6470 5620 0764 \n > KKinshuKK07: 0006 7284 9976 \n > Prince33246: 6197 5022 9570 \n > TheTaurian22: 5767 2035 1682 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("745932214587490314")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&745931607592009788> and have fun :)) GL! 🔥"
              );
            member.roles.add(holdRole);
            member.roles.add(role).catch(console.error);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Virbank City Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&745902834402459798>"
      );

      message.client.channels.cache
        .get("745903244647202836")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, blackmirrorleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (blackmirrorleader.id === "409741595550941184" ||
            blackmirrorleader.id === "615101506382725158" ||
            blackmirrorleader.id === "645703049670688812" ||
            blackmirrorleader.id === "538713587599015939")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "745902893663649802"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Virbank City Gym** \n This is a **Poison/Water Gym** with **Electric Type Pokemon** banned! \n Also **Rainy-Cast, Ferrothorn, Meganium** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > Count.Xevious: 3980 2366 9763 \n > BraviorWyvern: 0468 7062 2966 \n > pratt07: 1716 6620 0731 \n > shivkeshav: 5051 6781 0093 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("745903244647202836")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&745902834402459798> and have fun :)) GL! 🔥"
              );
            member.roles.add(holdRole);
            member.roles.add(role).catch(console.error);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Glacial Jungle Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&746194512094822460>"
      );

      message.client.channels.cache
        .get("746194971081834497")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, blackmirrorleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (blackmirrorleader.id === "324233354922688514" ||
            blackmirrorleader.id === "496542967084089344" ||
            blackmirrorleader.id === "532258063592456210" ||
            blackmirrorleader.id === "343708491514642433")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "746194813161832458"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Glacial Jungle Gym** \n This is a **Ice/Grass Gym** with **Steel Type Pokemon** banned! \n Also **Castform(Sunny), Hypno, Blaziken** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > Arundrag: 6721 1622 0845 \n > PoketrainerJeet: 9706 5300 9508 \n > SupersaiyaanJoy: 9565 1932 1161 \n > Surajiton: 6321 4156 3006 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("746194971081834497")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&746194512094822460> and have fun :)) GL! 🔥"
              );
            member.roles.add(holdRole);
            member.roles.add(role).catch(console.error);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Lava Ridge Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&746597884446769173>"
      );

      message.client.channels.cache
        .get("746598164559298610")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, blackmirrorleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (blackmirrorleader.id === "521791058955468800" ||
            blackmirrorleader.id === "310336431644213248" ||
            blackmirrorleader.id === "581348095149735936" ||
            blackmirrorleader.id === "627159736927780884")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "746597955095494666"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Lava Ridge Gym** \n This is a **Fire/Ground Gym** with **Water Type Pokemon** banned! \n Also **Dragonair,Drapion,Altaria** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > AdhuPTY: 0211 4449 2619 \n > GaneshRajesh00: 9754 4131 0486 \n > Legitking2704: 3753 4649 7665 \n > TheDarkPosiedon: 6196 2116 8607 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("746598164559298610")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&746597884446769173> and have fun :)) GL! 🔥"
              );
            member.roles.add(holdRole);
            member.roles.add(role).catch(console.error);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Ship Wreck Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&746599166641176576>"
      );

      message.client.channels.cache
        .get("746599493989957642")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, blackmirrorleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (blackmirrorleader.id === "371738674985041920" ||
            blackmirrorleader.id === "336446294878978049" ||
            blackmirrorleader.id === "500339756107038730" ||
            blackmirrorleader.id === "393416363638521856")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "746599252217823271"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Ship Wreck Gym** \n This is a **Water/Steel Gym** with **Electric Type Pokemon** banned! \n Also **Linoone,Hitmonchan,Hypno** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > debipran: 9634 6722 2371 \n > Kn8m4rE: 4150 7231 7431 \n > Navonil: 1790 0099 2134 \n > KrontenXD: 4604 5478 4570 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("746599493989957642")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&746599166641176576> and have fun :)) GL! 🔥"
              );
            member.roles.add(holdRole);
            member.roles.add(role).catch(console.error);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else if (
      message.mentions.roles.some((r) =>
        ["Stronghold Gym Leader"].includes(r.name)
      )
    ) {
      // has one of the roles
      const blackmirrorEmbed = new Discord.MessageEmbed().setDescription(
        `${user}` + " has challenged the Gym! <@&745933217411891220>"
      );

      message.client.channels.cache
        .get("745937838679261274")
        .send(blackmirrorEmbed);
      message.react("✅");

      const filter = (reaction, blackmirrorleader) => {
        return (
          ["✅"].includes(reaction.emoji.name) &&
          (blackmirrorleader.id === "404188091033714689" ||
            blackmirrorleader.id === "689410243284959276" ||
            blackmirrorleader.id === "612673165935640576" ||
            blackmirrorleader.id === "333145038248869888")
        );
      };

      message
        .awaitReactions(filter, { max: 1, time: 3000000 })
        .then((collected) => {
          const reaction = collected.first();
          let role = message.guild.roles.cache.find(
            (r) => r.id === "745933310819172365"
          );
          let member = message.member;

          if (reaction.emoji.name === "✅") {
            message.author.send(
              "Welcome to **Stronghold Gym** \n This is a **Normal/Steel Gym** with **Counter User Pokemon** banned! \n Also **Medicham,Perserker,Granbull** are Blacklisted as well! \n **No Mythicals, Legendaries or Shadows** are allowed in this Gym! \n Send Request to the Leaders : \n > 01Alta: 5905 9113 8294 \n > Shri23: 8809 0492 8302 \n > mightymajesty: 6672 8719 0230 \n > Zubzo: 3073 6289 2321 \n DM the Leaders and schedule a time to battle! GL!"
            );
            message.client.channels.cache
              .get("745937838679261274")
              .send(
                `${user}` +
                  " is here! Please time your matches with <@&745933217411891220> and have fun :)) GL! 🔥"
              );
            member.roles.add(holdRole);
            member.roles.add(role).catch(console.error);
          } else {
            console.log("you reacted with a thumbs down.");
          }
        })
        .catch((collected) => {
          console.log(error);
        });
    } else {
      // has none of the roles
      message.channel.send("Mention a Gym in your Challenge");
    }
  } else {
    message.channel.send(
      "Please use <#747664537699876927> for Challenges, GL!"
    );
  }
};

module.exports.help = {
  name: "challenge",
  aliases: ["fiteme"],
};
