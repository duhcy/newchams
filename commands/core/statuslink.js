const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'statuslink',
    description: "The Link to see product statuses",

    async execute({ client, inter, ephemeralStatus }) {
        inter.reply({content: "https://chamscheats.com/status/", ephemeral: ephemeralStatus});
    }
}