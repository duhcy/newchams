const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'epvptrade',
    description: "Instructions for an Epvp trade.",

    async execute({ client, inter, messageFlag }) {
        inter.reply({content: `Follow these steps:\n\nSelect a post from <#${client.config.opt.EPVPCHANNEL}>\nSend a trade request, and then leave a positive comment on the trade once accepted & the post\nPress the 'thanks' button on the post\nLeave a positive comment on our visitor page:`, ephemeral: messageFlag});
    }
}