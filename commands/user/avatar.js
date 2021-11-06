const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['usericon'],
    run: async (client, message, args) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 
    if (!user) return message.reply("Você não inseriu o usuário que deseja ver a foto!")
    let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });
        
    let embed = new Discord.MessageEmbed()

        .setTitle(`:frame_photo: Avatar de ${user.username}`)
        .setDescription(`Clique na imagem para baixar o avatar.`)
        .setImage(avatar)
        .setColor("#36393F")
       
    message.channel.send(`${user}`, embed)
}
}