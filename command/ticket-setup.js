const {MessageActionRow, MessageSelectMenu, Permissions} = require('discord.js')
module.exports = {
    name: '문의하기dd',
    usage: 'template',
    category: "문의하기",
    description: `템플릿 명령.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('생성할 티켓 종류를 선택하세요.')
					.addOptions([
						{
							label: '🛠 | 스크립트 문의',
							description: '스크립트 구매 및 오류관련 문의하기.',
							value: 'script',
						},
						{
							label: '🎨 | 디자인 문의',
							description: '디자인 구매관련 문의하기.',
							value: 'design',
						},
                        {
							label: '💬 | 기타 문의',
							description: '기타사항 문의하기.',
							value: 'others',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: '[ woy0en🛠 문의하기 ]',
                description: '원하시는 문의 종류를 눌러 문의를 시작하세요.',
                color: "BLURPLE",
                footer: {text: 'woy0en'}
            }],
            components: [row]
        })
    }
}
