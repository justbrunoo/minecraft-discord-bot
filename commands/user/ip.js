const Discord = require("discord.js");


module.exports = {
    name: 'ip',
    aliases: ['status', 'mcstatus'],
    run: async(client, message, args) => {

  if(!message.member) return
        
    try {
        var ip = "jogar.rede-vanity.com"
        var url = 'https://api.mcsrvstat.us/2/' + ip
        var icone = "https://eu.mc-api.net/v3/server/favicon/" + ip

        await axios.get(url).then(function (response) {

            let players = response.data.players.online
            let playersmax = response.data.players.max

            message.channel.send(new Discord.MessageEmbed()
                        .setThumbnail(`${icone}`)
                        .setDescription(`Conecte-se ao servidor para jogar com mais ${players} jogadores.
                             Saiba mais sobre o Rank UP Obsidian [AQUI](https://obsidian.rede-vanity.com).`)
                        .setImage(`https://minecraftskinstealer.com/achievement/19/O+servidor+possui/${presponse.data.players.onlinelayers}+jogadores+online.`)
                        .setColor("#36393F")
            )


        })
    } catch (e) {

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`O servidor está com o modo Manutenção ativado.
                        Saiba mais sobre o Rank UP clicando **[AQUI](https://galaxy.apolomc.com)**.`)
        .setImage(`https://minecraftskinstealer.com/achievement/25/O+modo+manutenção/está+ativado.`)
        .setColor("#36393F")
        )
      }
    }
}