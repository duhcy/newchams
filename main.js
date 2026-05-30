const discord = require('discord.js');
console.log('discord.js exports:', Object.keys(discord));
const { Client, GatewayIntentBits } = discord;
console.log('GatewayIntentBits:', GatewayIntentBits);
require('dotenv').config();

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
});

client.config = require('./config');

require('./loader');

client.login(process.env.KEY);