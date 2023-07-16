const Discord = require("discord.js");
const cfx = require("cfx-api");
const axios = require("axios");
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  const status = await cfx.fetchStatus()
  message.channel.send(status.everythingOk ? "**All Cfx.re Systems Are Operational**" : "Cfx.re Is Experiencing Issues")
};

exports.config = {
  name: "status",
  guildOnly: true,
  aliases: [],
};