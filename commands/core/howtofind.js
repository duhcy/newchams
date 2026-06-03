const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'howtofind',
    description: 'How to Find Your Key',

    async execute({ client, inter, ephemeralStatus }) {
         const embed = new EmbedBuilder()
             .setColor(9448166)
            .setTitle('How to Find Your Key')
            .setDescription('**How to Find Your Key & Guide**\n\nAccess your purchases and download your key here:\n[View Your Purchases](https://chamscheats.com/clients/purchases)\n\n**What you\'ll find:**\nYour product keys\nDownload links\nPurchase history\nInstallation guides\n\n**Tip:** Make sure you\'re logged into your account!')
            .setFooter({ text: 'ChamsCheats', iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024' })
            .setImage('https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif')
            .setTimestamp();
        inter.reply({ embeds: [embed], ephemeral: ephemeralStatus });
    }
};
