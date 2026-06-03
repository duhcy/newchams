const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'dmavideo',
    description: 'DMA tutorial video',

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor(9448166)
            .setTitle('🎥 DMA Tutorial Video')
            .setDescription('Watch this comprehensive tutorial for DMA setup and usage instructions.\n\nhttps://www.youtube.com/watch?v=-DxgOm_SRC4')
            .setImage('https://img.youtube.com/vi/-DxgOm_SRC4/maxresdefault.jpg')
            .setFooter({ 
                text: 'ChamsCheats',
                iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
            });

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('Watch Video')
                .setStyle(ButtonStyle.Link)
                .setURL('https://www.youtube.com/watch?v=-DxgOm_SRC4')
                .setEmoji('▶️')
        );

        inter.reply({ 
            embeds: [embed],
            components: [row],
            ephemeral: ephemeralStatus 
        });
    }
}
