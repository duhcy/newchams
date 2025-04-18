const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'howtofind',
    description: "Where to find your purchases on website.",

    async execute({ client, inter, messageFlag }) {
        inter.reply({content: "https://chamscheats.com/clients/purchases", ephemeral: messageFlag});
    }
}