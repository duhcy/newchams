const { Client, Intents } = require('discord.js');
require('dotenv').config();

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.MESSAGE_CONTENT
    ],
});

client.config = require('./config');

require('./loader');

client.login(process.env.KEY);