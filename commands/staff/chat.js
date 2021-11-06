const Discord = require('discord.js')

module.exports = {
    name: 'chat',
    aliases: ['chat'],
    run: async(client, message, args) => {

        
			if(!message.member.roles.cache.some(cargo =>["Gerente", "Master", "Diretor", "Administrador"].includes(cargo.name))) {

				return message.reply("você não possui permissão.")

  			} else {

          let tipo = args[0];
          if(!tipo) return message.channel.send(new Discord.MessageEmbed()
          .setDescription("Utilize /chat [on | off] para ativar/desativar o chat.")
          .setColor("#00ffd9"))

              if (tipo === "on") {
                message.channel.updateOverwrite(message.guild.roles.cache.find( e => e.name.toLowerCase().trim() == "@everyone"), {
                  SEND_MESSAGES: true
                })
                message.channel.send(new Discord.MessageEmbed()
          .setDescription("O canal " + message.channel.toString() + " está atualmente **aberto** e todos os membros terá o poder de conversar neste chat.")
          .setColor("#00ffd9"))
                
              }
              //Fiz nos outros, porque não neste né? Bom, esse comando funciona no mesmo jeito da #revisões. Ao digitar /chat ele irápedir uma opção "on" ou "off" se a pessoa digitar /chat on o chat será liberado, se ela digitar /chat off o chat será fechado aí somente quem tiver a permissão setada manualmente poderá falar.
              else if (tipo == "off" || "desativar"){
                message.channel.updateOverwrite(message.guild.roles.cache.find( e => e.name.toLowerCase().trim() == "@everyone"), {
                  SEND_MESSAGES: false
                })
                message.channel.send(new Discord.MessageEmbed()
          .setDescription("O canal " + message.channel.toString() + " está atualmente **trancado** e nenhum membro terá o poder de conversar neste chat.")
          .setColor("#00ffd9"))
              }
              
        
        }
    }
  }
