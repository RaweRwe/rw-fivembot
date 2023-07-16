const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const cfx = require("cfx-api");
const axios = require("axios");
require("./util/Loader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} Commands Are Loading!`);
  files.forEach((f) => {
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} Loaded!`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach((alias) => {
      client.aliases.set(alias, props.config.name);
    });
  });
});

client.login(config.token);
