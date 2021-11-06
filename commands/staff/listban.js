const Discord = require("discord.js");

module.exports = {
  name: 'listban',
  aliases: ['banimentos'],
  run: async(client, message, args) => {

        var icone = "https://eu.mc-api.net/v3/server/favicon/jogar.rede-vanity.com"
  	    let servidor = client.guilds.cache.get(`892158976802836520`)
    	servidor.fetchBans().then(bans => {
        
        let bansmap = bans.map(user => `${user.user.username} (\`${user.user.id}\`)`).join('\n')

        const embed = new Discord.MessageEmbed()
        .setAuthor("🚨 Banimentos")
        .setThumbnail(`${icone}`)
        .setDescription(bansmap.length >= 1900 ? `${bansmap.substr(0, 1900)}...\n\n**Para o conforto de todos, essa mensagem foi abreviada porque ultrapassou 2.000 caracteres.**` : `${bansmap}` || "YAY! Todos os membros são comportados e nenhum banimento foi encontrado no servidor.")
        .setColor("#36393F")
        message.channel.send(`${message.author}`, embed)
    	})
    }
}