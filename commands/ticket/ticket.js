const Discord = require('discord.js');
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons')

module.exports = {
    name: 'ticket',
    run: async (client, message, args) => {


    	const QuestionTicket = new MessageMenuOption()
    	.setLabel("Dúvidas")
    	.setDescription("Saciar dúvidas relacionadas ao servidor.")
    	.setEmoji("❓")
    	.setValue('ticket-question')

    	const ReportTicket = new MessageMenuOption()
    	.setLabel("Denúncias")
    	.setDescription("Denunciar um jogador ou bug.")
    	.setEmoji("🛑")
    	.setValue('ticket-reports')

    	const ShopTicket = new MessageMenuOption()
    	.setLabel("Compra")
    	.setDescription("Realizar compras ou então, resolver com problemas.")
    	.setEmoji("🛒")
    	.setValue('ticket-shop')

    	const TiktokTicket = new MessageMenuOption()
    	.setLabel("Tiktok & Kwai")
    	.setDescription("Resgatar VIP grátis com Tiktok/Kwai.")
    	.setEmoji("🤑")
    	.setValue('ticket-tiktok')

    	const CloseTicket = new MessageMenuOption()
    	.setLabel("Fechar atendimento.")
    	.setEmoji("🚪")
    	.setValue('close-channel')

    	const Menu = new MessageMenu()
    	.setID('menu1')
    	.setPlaceholder('Escolha uma opção.')
    	.addOption(QuestionTicket)
    	.addOption(ReportTicket)
    	.addOption(ShopTicket)
    	.addOption(TiktokTicket)
    	//.setMaxValue(2)

    	const CloseMenu = new MessageMenu()
    	.setID('closemenu')
    	.setPlaceholder('Escolha uma opção.')
    	.addOption(CloseTicket)

    	const Row1 = new MessageActionRow()
    	.addComponent(Menu)

    	const CloseRow = new MessageActionRow()
    	.addComponent(CloseMenu)


    	let initialEmbed = new Discord.MessageEmbed()
    	.setTitle("❓ RESOLVA SEUS PROBLEMAS!")
    	.setDescription("Se você está lendo isso, provavelmente precisa de ajuda!\n\nEntão vamos te ajudar! Mas antes de tudo, precisamos saber onde você precisa de ajuda. Escolha uma categoria de acordo com a sua **necessidade**, irei criar um canal privado para você e os membros da equipe para te ajudar o mais rápido possível!\n\n`OP mal uso deste canal resultará em uma punição.`")
    	.setFooter("©️ Rede Vanity, 2021.")
    	.setColor("#b300ad")

    	await message.channel.send(initialEmbed, {components: [Row1] })


    	client.on('clickMenu', async menu => {

    		const categoria = "900072123941396480";
    		const everyone = message.guild.roles.cache.find(c => c.name === "@everyone");

    		const suporte = message.guild.roles.cache.find(suporte => suporte.name === "Suporte")
    		const moderador = message.guild.roles.cache.find(moderador => moderador.name === "Moderador")
    		const coord = message.guild.roles.cache.find(coord => coord.name === "Coordenador")
    		const admin = message.guild.roles.cache.find(admin => admin.name === "Admin")

    		const member = menu.clicker.member;


    		/*

			██████╗ ██╗   ██╗██╗   ██╗██╗██████╗  █████╗ ███████╗
			██╔══██╗██║   ██║██║   ██║██║██╔══██╗██╔══██╗██╔════╝
			██║  ██║██║   ██║██║   ██║██║██║  ██║███████║███████╗
			██║  ██║██║   ██║╚██╗ ██╔╝██║██║  ██║██╔══██║╚════██║
			██████╔╝╚██████╔╝ ╚████╔╝ ██║██████╔╝██║  ██║███████║
			╚═════╝  ╚═════╝   ╚═══╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝

    		*/
    		if(menu.values[0] == 'ticket-question') {
    			await menu.reply.defer()

    			const chat = await menu.message.guild.channels.create("dúvidas-" + menu.clicker.member.nickname, { type: 'text', parent: categoria });
    			await chat.createOverwrite(everyone, { "SEND_MESSAGES": false, "VIEW_CHANNEL": false })
    			await chat.createOverwrite(member, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(suporte, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(moderador, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(coord, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(admin, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })

    			let embed = new Discord.MessageEmbed()
    				.setTitle("❓ Canal de atendimento aberto.")
    				.setThumbnail("https://images-ext-2.discordapp.net/external/CkfDaKS-LcORdDp26FLE5zxZ8RqsyQ7AQJ6EHaJkjoA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/892158976802836520/c06cc39aadb052230f7f25cbdab1bf25.png?width=454&height=454")
    				.setDescription(`Esperamos poder sanar todas as suas dúvidas! Pedimos para que você espere um membro da equipe visualizar  canal de atendimento. Isso não deve demorar muito.`)
    				.addField("Categoria:", "Dúvidas")
    				.setColor("#b300ad")
    				.setFooter("©️ Rede Vanity, 2021.")

    			chat.send(`${member}`)
    			chat.send(embed, {components: [CloseRow] })
    		}

    		/*

			██████╗ ███████╗██████╗  ██████╗ ██████╗ ████████╗███████╗
			██╔══██╗██╔════╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
			██████╔╝█████╗  ██████╔╝██║   ██║██████╔╝   ██║   ███████╗
			██╔══██╗██╔══╝  ██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
			██║  ██║███████╗██║     ╚██████╔╝██║  ██║   ██║   ███████║
			╚═╝  ╚═╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝

    		*/

    		if(menu.values[0] == 'ticket-reports') {
    			await menu.reply.defer()

    			const chat = await menu.message.guild.channels.create("reports-" + menu.clicker.member.nickname, { type: 'text', parent: categoria });
    			await chat.createOverwrite(everyone, { "SEND_MESSAGES": false, "VIEW_CHANNEL": false })
    			await chat.createOverwrite(moderador, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(coord, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(admin, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(member, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })

    			let embed = new Discord.MessageEmbed()
    				.setTitle("❓ Canal de atendimento aberto.")
    				.setThumbnail("https://images-ext-2.discordapp.net/external/CkfDaKS-LcORdDp26FLE5zxZ8RqsyQ7AQJ6EHaJkjoA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/892158976802836520/c06cc39aadb052230f7f25cbdab1bf25.png?width=454&height=454")
    				.setDescription(`Esperamos poder sanar todas as suas dúvidas! Pedimos para que você espere um membro da equipe visualizar  canal de atendimento. Isso não deve demorar muito.`)
    				.addField("Categoria:", "Denúncias")
    				.setColor("#b300ad")
    				.setFooter("©️ Rede Vanity, 2021.")

    			chat.send(`${member}`)
    			chat.send(embed, {components: [CloseRow] })
    		}

    		/*

 			██████╗ ██████╗ ███╗   ███╗██████╗ ██████╗  █████╗ ███████╗
			██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗██╔══██╗██╔════╝
			██║     ██║   ██║██╔████╔██║██████╔╝██████╔╝███████║███████╗
			██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██╗██╔══██║╚════██║
			╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║  ██║███████║
 			╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

    		*/

    		if(menu.values[0] == 'ticket-shop') {
    			await menu.reply.defer()

    			const chat = await menu.message.guild.channels.create("compras-" + menu.clicker.member.nickname, { type: 'text', parent: categoria });
    			await chat.createOverwrite(everyone, { "SEND_MESSAGES": false, "VIEW_CHANNEL": false })
    			await chat.createOverwrite(coord, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(admin, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(member, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })

    			let embed = new Discord.MessageEmbed()
    				.setTitle("❓ Canal de atendimento aberto.")
    				.setThumbnail("https://images-ext-2.discordapp.net/external/CkfDaKS-LcORdDp26FLE5zxZ8RqsyQ7AQJ6EHaJkjoA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/892158976802836520/c06cc39aadb052230f7f25cbdab1bf25.png?width=454&height=454")
    				.setDescription(`Esperamos poder sanar todas as suas dúvidas! Pedimos para que você espere um membro da equipe visualizar  canal de atendimento. Isso não deve demorar muito.`)
    				.addField("Categoria:", "Compras")
    				.setColor("#b300ad")
    				.setFooter("©️ Rede Vanity, 2021.")

    			chat.send(`${member}`)
    			chat.send(embed, {components: [CloseRow] })
    		}

    		/*

 			████████╗██╗██╗  ██╗████████╗ ██████╗ ██╗  ██╗       ██╗       ██╗  ██╗██╗    ██╗ █████╗ ██╗
 			╚══██╔══╝██║██║ ██╔╝╚══██╔══╝██╔═══██╗██║ ██╔╝       ██║       ██║ ██╔╝██║    ██║██╔══██╗██║
    			██║   ██║█████╔╝    ██║   ██║   ██║█████╔╝     ████████╗    █████╔╝ ██║ █╗ ██║███████║██║
    			██║   ██║██╔═██╗    ██║   ██║   ██║██╔═██╗     ██╔═██╔═╝    ██╔═██╗ ██║███╗██║██╔══██║██║
    			██║   ██║██║  ██╗   ██║   ╚██████╔╝██║  ██╗    ██████║      ██║  ██╗╚███╔███╔╝██║  ██║██║
    			╚═╝   ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝    ╚═════╝      ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝

    		*/

    		if(menu.values[0] == 'ticket-tiktok') {
    			await menu.reply.defer()

    			const chat = await menu.message.guild.channels.create("tiktok-" + menu.clicker.member.nickname, { type: 'text', parent: categoria });
    			await chat.createOverwrite(everyone, { "SEND_MESSAGES": false, "VIEW_CHANNEL": false })
    			await chat.createOverwrite(coord, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(admin, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })
    			await chat.createOverwrite(member, { "VIEW_CHANNEL": true, "SEND_MESSAGES": true, "ATTACH_FILES": true, "CREATE_INSTANT_INVITE": false, "READ_MESSAGE_HISTORY": true, "VIEW_CHANNEL:": true })

    			let embed = new Discord.MessageEmbed()
    				.setTitle("❓ Canal de atendimento aberto.")
    				.setThumbnail("https://images-ext-2.discordapp.net/external/CkfDaKS-LcORdDp26FLE5zxZ8RqsyQ7AQJ6EHaJkjoA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/892158976802836520/c06cc39aadb052230f7f25cbdab1bf25.png?width=454&height=454")
    				.setDescription(`Esperamos poder sanar todas as suas dúvidas! Pedimos para que você espere um membro da equipe visualizar  canal de atendimento. Isso não deve demorar muito.`)
    				.addField("Categoria:", "VIP Grátis com Tiktok ou Kwai")
    				.setColor("#b300ad")
    				.setFooter("©️ Rede Vanity, 2021.")

    			chat.send(`${member}`)
    			chat.send(embed, {components: [CloseRow] })
    		}

    		if(menu.values[0] == 'close-channel') {
    			await menu.reply.defer()
    			menu.channel.send("O canal de atendimento irá ser finalizado em 5 segundos.")
    			    setTimeout(() => {
              		menu.message.channel.delete()
          		}, 5000)
    		}
    	})
    }
}