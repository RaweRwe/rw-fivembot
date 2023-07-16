const Discord = require("discord.js");
const cfx = require("cfx-api");
const axios = require("axios");
const config = require("../config.json");
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  const server = await cfx.fetchServer(config.serverid);
  message.channel.send(`There Are **${server.players}** Players Connected!`);
};

exports.config = {
  name: "players",
  guildOnly: true,
  aliases: [],
};
