const Discord = require("discord.js");

module.exports = {
    name: 'falar',
    aliases: ['say'],
    run: async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR"))
        return message.channel.send(new Discord.MessageEmbed()
          .setDescription("Você não tem permissão para usar este comando.")
          .setColor("#36393F"))
    
        var fala = args.slice(1).join(" ");
        if(!fala) return message.channel.send(new Discord.MessageEmbed()
          .setDescription("Utilize /falar [#canal] [mensagem] para enviar uma mensagem a um determinado canal.")
          .setColor("#36393F"))
    
        var canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!canal) return message.channel.send(new Discord.MessageEmbed()
          .setDescription("Utilize /falar [#canal] [mensagem] para enviar uma mensagem a um determinado canal.")
          .setColor("#36393F"))
    
        canal.send(fala);
        message.channel.send("A mensagem foi enviada com sucesso.c")
    }
}