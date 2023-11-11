const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('티켓을 삭제하시려면 클릭하세요!')
					.addOptions([
						{
							label: '🗑️ 티켓 삭제',
							description: '티켓을 삭제합니다.',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = "1172845051433472041"
        let roleStaff = interaction.guild.roles.cache.get('1172844998736236594')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '이미 티켓을 열고있습니다.', ephemeral: true})
            if (interaction.values[0] == "script") {
                interaction.guild.channels.create(`ticket ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const script = new MessageEmbed()
                    .setTitle('스크립트 문의')
                    .setDescription('__문의하실 때는 자세하게 작성 부탁드립니다.__')
                    .setFooter('woy0en')
                    c.send({embeds: [script], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `티켓을 열었습니다. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "design") {
                interaction.guild.channels.create(`ticket ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const design = new MessageEmbed()
                    .setTitle('디자인 문의')
                    .setDescription('__문의하실 때는 자세하게 작성 부탁드립니다.__')
                    .setFooter('woy0en')
                    c.send({embeds: [design], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `티켓을 열었습니다. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "others") {
                interaction.guild.channels.create(`ticket ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('기타 문의')
                    .setDescription('__문의하실 때는 자세하게 작성 부탁드립니다.__')
                    .setFooter('woy0en')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `티켓을 열었습니다. <#${c.id}>`, ephemeral: true})
                })
                
            
                
            
            }
        }
    }
}