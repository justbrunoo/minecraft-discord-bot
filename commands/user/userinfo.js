const Discord = require("discord.js");
const moment = require('moment');

module.exports = {
  name: 'userinfo',
  aliases: ['user'],
  run: async(client, message, args) => {

    let user = client.users.cache.get(args-[0]) || message.mentions.users.first() ||  message.author;

    let statusmebro;
	let messageArray = message.content.split(" ");

    if(user.presence.status === "dnd") statusmebro = `<:ocupado:869165783236898877>`;
    if(user.presence.status === "idle") statusmebro = `<:ausente:869165823586082827>`;
    if(user.presence.status === "offline") statusmebro = `<:offline:869165901629521951>`;
    if(user.presence.status === "online") statusmebro = `<:offline:869165901629521951>`;

    let member = message.guild.member(user);
    let avatar = message.member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 });

            const embed = new Discord.MessageEmbed()

            .setTitle(`📡 Perfil de ${member.nickname}`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
            .setColor('#36393F')
			.setFooter(`${message.author.username}`, client.user.displayAvatarURL())
			.setTimestamp()
            .setDescription(`> Confira todas as informações sobre **${member.user.username}**

                :bookmark: **Nickname:** ${member.nickname}
                :satellite: **ID**: ${member.id}
                :door: Entrou aqui no dia ${moment(member.joinedAt).format('LL')}
                :calendar: Conta criada em ${moment(member.creadtedAt).format('LL')}`)
            message.channel.send(embed)
  }
}