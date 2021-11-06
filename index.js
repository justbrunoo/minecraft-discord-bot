const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const Discord = require("discord.js");
const talkedRecently = new Set();
const client = new Client()
const fs = require("fs")
require('discord-buttons')(client)

client.commands = new Collection();
client.aliases = new Collection();

config({
  path: __dirname + "/.env"
});


["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log(`[BOT] Comandos inicializados com suceso.`);
})


client.on("message", async message => {
  
  const prefix = "/";

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;


  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));


  if (command) command.run(client, message, args);
});

client.on('raw', (packet) => {

  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;

  const channel = client.channels.cache.get(packet.d.channel_id);
  if (channel.messages.cache.has(packet.d.message_id)) return;

  channel.fetchMessage(packet.d.message_id).then(message => {

    const emoji = packet.d.emoji.name ? `${packet.d.emoji.name}:${packet.d.emoji.name}` : packet.d.emoji.name;
    const reaction = message.reactions.cache.get(emoji);

    if (packet.t === 'MESSAGE_REACTION_ADD') {

      client.emit('messageReactionAdd', reaction, client.users.cache.get(packet.d.user_id));

    }

    if (packet.t === 'MESSAGE_REACTION_REMOVE') {

      client.emit('messageReactionRemove', reaction, client.users.cache.get(packet.d.user_id));

    }
  });
});
client.login(process.env.TOKEN);