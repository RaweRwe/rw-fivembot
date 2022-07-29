const Discord = require("discord.js");
const config = require('../config.json');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `Rawe`}, status: 'idle' })
};

// Type kısımları:
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// Status kısımları:
// online - çevrim içi
// idle - boşta
// dnd - rahatsız etmeyin

// name kısmına oynuyorunuzu yazabilirsiniz.
