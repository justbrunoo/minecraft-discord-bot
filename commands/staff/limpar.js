const Discord = require('discord.js');
module.exports = {
    name: 'limpar',
    aliases: ['cc', 'clear'],
    run: async(client, message, args) => {

  if(!message.member) return
  
  if(!message.member.roles.cache.some(cargo =>["Gerente", "Master", "Diretor", "Administrador", "Ajudante", "Moderador"].includes(cargo.name))) {

    return message.channel.send(new Discord.MessageEmbed()
          .setDescription(message.author.username + ", você não tem permissão.")
          .setColor("#36393F"))

    } else {

  var limit = 100
  if (args.length === 1) {
  limit = parseInt(args[0])
  } else {
    
    if(!args[0]) return message.channel.send(`Utilize /limpar [quantidade de mensagens] para limpar o canal.`)
      
  }
      message.channel.bulkDelete(limit)
        .then(messages => {
          message.channel.send(new Discord.MessageEmbed().setDescription(messages.size + " foram apagadas do canal.").setColor("#36393F"))
          .then(message => setTimeout(() => message.delete(), 2000))
      })
    }
  }
}