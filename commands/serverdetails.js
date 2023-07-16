const Discord = require("discord.js");
const cfx = require("cfx-api");
const axios = require("axios");
const config = require("../config.json");
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  const server = await cfx.fetchServer(config.serverid);
  message.channel.send(
    `Game Type : **${server.gameType}**\nHost Name : **${server.hostname}**\nMax Players : **${server.maxPlayers}**\nOne Sync : **${server.isOneSyncEnabled}**\n`
  );
};

exports.config = {
  name: "details",
  guildOnly: true,
  aliases: [],
};
