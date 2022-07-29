const Discord = require("discord.js");
const cfx = require("cfx-api");
const axios = require("axios");
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  const status = await cfx.fetchStatus()
  message.channel.send(status.everythingOk ? "**All Cfx.re systems are operational**" : "Cfx.re is experiencing issues")
};

exports.config = {
  name: "status",
  guildOnly: true,
  aliases: [],
};