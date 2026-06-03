const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'dmavideo',
    description: 'DMA tutorial video',

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor(0x771BCB)
            .setTitle('DMA Tutorial Video')
            .setDescription('Watch this tutorial video for comprehensive DMA setup and troubleshooting.')
            .setURL('https://www.youtube.com/watch?v=-DxgOm_SRC4')
            .setFooter({ text: 'Click the title to watch the video!' })
            .setTimestamp();
        
        inter.reply({ embeds: [embed], ephemeral: ephemeralStatus });
    }
}
