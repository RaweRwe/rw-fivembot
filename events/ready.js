const Discord = require("discord.js");
const config = require("../config.json");
module.exports = async (client) => {
  client.user.setPresence({
    activity: { type: "WATCHING", name: `Rawe` },
    status: "idle",
  });
};

// Types:
// WATCHING - WATCHING
// PLAYING - PLAYING
// LISTENING - LISTENING

// Statuses:
// online - online
// idle
// dnd - do not disturb

// You can write your game in the name field.
