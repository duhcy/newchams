const ms = require('ms');
const { Translate } = require('../../translate');
const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Get the ping of the bot!",

    async execute({ client, inter }) {
        await inter.reply({content: `Pong! API Latency is <${Math.round(client.ws.ping)}ms 🛰️>, last heartbeat calculated <${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}> ago`, flags: MessageFlags.Ephemeral});
    }
};