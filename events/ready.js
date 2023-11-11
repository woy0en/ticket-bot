module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`준비완료 ${client.user.username}`)

        var compteurStatus = 1
        setInterval(async () => {
            status =  [`재연# 관리`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "https://www.twitch.tv/"
                  }],
                  status: "online"})
        }, 5000);
    }
}
