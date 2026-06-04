const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'dmaspeedtest',
    description: "DMA Speedtest.",

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor(9448166)
            .setTitle('⚡ DMA Speedtest Tool')
            .setDescription('Test the speed and performance of your DMA device with the Lone DMA Speedtest utility.')
            .addFields(
                {
                    name: '📊 What it Does',
                    value: 'Measures read/write speeds and overall performance of your DMA card.',
                    inline: false
                },
                {
                    name: '🔗 Repository',
                    value: '[View on GitHub](https://github.com/lone-dma/Lone-DMA-Test)',
                    inline: false
                }
            )
            .setFooter({ 
                text: 'ChamsCheats',
                iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
            })
            .setTimestamp();

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('View Repository')
                .setStyle(ButtonStyle.Link)
                .setURL('https://github.com/lone-dma/Lone-DMA-Test')
                .setEmoji('⚡')
        );

        inter.reply({embeds: [embed], components: [row], ephemeral: ephemeralStatus});
    }
}