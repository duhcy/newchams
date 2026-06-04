const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'secureboot',
    description: "Instructions on how to disable secure boot",

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor(9448166)
            .setTitle('🔒 Disable Secure Boot')
            .setDescription('Follow this tutorial video to learn how to disable Secure Boot on your system.')
            .addFields(
                {
                    name: '📺 Tutorial Video',
                    value: 'Watch the video below for step-by-step instructions on disabling Secure Boot in your BIOS.',
                    inline: false
                },
                {
                    name: '⚠️ Important',
                    value: 'Only disable Secure Boot if you understand the security implications. Make sure you know what you\'re doing.',
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
                .setLabel('Watch Tutorial')
                .setStyle(ButtonStyle.Link)
                .setURL('https://www.youtube.com/watch?v=CbgX_Ek76XA')
                .setEmoji('📺')
        );

        inter.reply({embeds: [embed], components: [row], ephemeral: ephemeralStatus});
    }
}