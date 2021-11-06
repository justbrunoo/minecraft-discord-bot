const Discord = require("discord.js");

module.exports = {
  name: 'skin',
  aliases: ['mcskin'],
  run: async(client, message, args) => {

    const player = args[0]
    const mcbody = new Discord.MessageEmbed()

       .setColor("#36393F")
        .setTitle(`:frame_photo: Skin de ${player}`)
        .setDescription(`Clique [aqui](https://mc-heads.net/body/${player}/500) para baixar a skin de ${player}.`)
        .setImage(`https://mc-heads.net/body/${player}/500`)
    
    message.channel.send(mcbody)
  }
}