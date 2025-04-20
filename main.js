const { Client, GatewayIntentBits } = require('discord.js');
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