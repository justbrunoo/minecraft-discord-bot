const Discord = require("discord.js");

module.exports = {
  name: 'head',
  aliases: ['mchead'],
  run: async(client, message, args) => {

    const player = args[0]
    if (!player) return message.reply("Você não inseriu o jogador que deseja ver a foto.")
    const mcbody = new Discord.MessageEmbed()

       .setColor("#36393F")
        .setTitle(`:frame_photo: Cabeça de ${player}`)
        .setDescription(`Clique [aqui](https://mc-heads.net/avatar/${player}/500) para baixar a Cabeça de ${player}.`)
        .setImage(`https://mc-heads.net/avatar/${player}/500`)
    
    message.channel.send(mcbody)
  }
  /*
                          .setDescription(`Conecte-se ao servidor para jogar com mais ${players} jogadores.
                             Saiba mais sobre o Factions Galaxy clicando [AQUI](https://galaxy.apolomc.com).`)
                        .setImage(`https://minecraftskinstealer.com/achievement/19/O+servidor+possui/${presponse.data.players.onlinelayers}+jogadores+online.`)
                        .setColor("#36393F")
                        */
}