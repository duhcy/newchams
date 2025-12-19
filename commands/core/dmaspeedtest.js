const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'dmaspeedtest',
    description: "DMA Speedtest.",

    async execute({ client, inter, ephemeralStatus }) {
        inter.reply({content: "https://github.com/lone-dma/Lone-DMA-Test", ephemeral: ephemeralStatus});
    }
}