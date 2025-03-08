const { Client, Events, GatewayIntentBits } = require(discord.js);
const { discordToken } = require('./config.json');

const client = new Client({ intents: [
        GatewayIntentBits.Guilds
    ]
});

client.once(Events.ClientReady, readyClient => {
    console.log(`${readyClient.user.tag}, 온라인!`);
})

client.login(discordToken);


