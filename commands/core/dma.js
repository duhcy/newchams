const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'dma',
    description: "DMA Files and Drivers",

    async execute({ client, inter, ephemeralStatus }) {
        inter.reply({content: `**Flash tools and drivers**\nhttps://cdn.discordapp.com/attachments/1254601397266288691/1272941148373258270/flash.rar?ex=67112e53&is=670fdcd3&hm=203497f1c1fdcea92e7f9d97f1e07c01899adc7b7f67fe642f7d9dece752a488&\n\n**DMA DNA ID**\nhttps://cdn.discordapp.com/attachments/1254601397266288691/1266984056583618621/DMA-DNA-ID-main.zip?ex=6711431a&is=670ff19a&hm=23313306767b4cebcdc846662a08dca85cddb3c1ec226badd3b63d1310987107&\n`, ephemeral: ephemeralStatus});
    }
}