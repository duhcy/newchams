const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'dcontrol',
    description: "Windows Defender Controller.",

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor(9448166)
            .setTitle('🛡️ Windows Defender Controller')
            .setDescription('Disable Windows Defender with ease. Download DefenderControl and take control of your system.')
            .addFields(
                {
                    name: '📥 Download',
                    value: '[Download DefenderControl](https://www.mediafire.com/file/wy1lvgmj4vrzycc/DefenderControl.zip/file)',
                    inline: false
                },
                {
                    name: '⚠️ Warning',
                    value: 'Only disable Windows Defender if you know what you\'re doing. This may compromise your system security.',
                    inline: false
                }
            )
            .setFooter({ 
                text: 'ChamsCheats',
                iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
            })
            .setTimestamp();
        
        inter.reply({embeds: [embed], ephemeral: ephemeralStatus});
    }
}