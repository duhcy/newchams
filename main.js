const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // GatewayIntentBits.GuildMembers, // TODO: Re-enable after bot verification
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ],
});

client.config = require('./config');

require('./loader');

client.login(process.env.KEY);