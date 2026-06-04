const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'tpm',
    description: "How to disable TPM in BIOS",

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor(9448166)
            .setTitle('🛡️ Disable TPM in BIOS')
            .setDescription('Follow this tutorial video to learn how to disable TPM (Trusted Platform Module) in your BIOS.')
            .addFields(
                {
                    name: '📺 Tutorial Video',
                    value: 'Watch the video below for step-by-step instructions on disabling TPM.',
                    inline: false
                },
                {
                    name: '⚙️ What is TPM?',
                    value: 'TPM is a security feature in your BIOS. Disabling it may be necessary for certain software or gaming scenarios.',
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
                .setURL('https://www.youtube.com/watch?v=1V-ZtXzbIQE')
                .setEmoji('📺')
        );

        inter.reply({embeds: [embed], components: [row], ephemeral: ephemeralStatus});
    }
}