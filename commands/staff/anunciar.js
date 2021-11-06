const Discord = require('discord.js');

module.exports = {
    name: 'anunciar',
    aliases: ['anuncio'],
    run: async(client, message, args) => {


    if(!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.reply("você não possui permissão para utilizar este comando.")

   	message.channel.send(`Informe-me onde você quer enviar a mensagem.`).then(msg => {
   		let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}).on('collect', c => {
   			canal = c.mentions.channels.first()
   		if(!canal) {
   			message.reply('mencione um canal.')
   		} else {
   			message.channel.send('Qual será o conteúdo do anúncio?').then(msg2 => {
   				let cl = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}).on('collect', c => {
   					desc = c.content

   				message.channel.send('Qual será o título do anúncio?').then(msg3 => {
   					let ck = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}).on('collect', c => {
   						title = c.content

   					message.channel.send(`O anúncio foi enviado para o canal ${canal}`)

    				let embed = new Discord.MessageEmbed()

    					.setTitle(`${title}`)
        			.setDescription(`${desc}`)
        			.setColor("#36393F")

    				    canal.send(embed)

      					
   					})
   				})
   				})
   			})
   		}
   		})
   	})
}
}