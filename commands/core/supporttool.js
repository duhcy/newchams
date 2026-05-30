const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'supporttool',
  description: 'Download and run the support tool',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('Support Tool')
      .setDescription('Download and run this tool to verify your system is ready:')
      .setColor(9448166)
      .addFields(
        {
          name: 'Download',
          value: '[Click here to download the support tool](https://mega.nz/file/e0hihCRD#N6WdBY-rjsmcg_73KhZmArfoFvz0VvAfY6dUcXvZtoA)',
          inline: false
        },
        {
          name: 'Instructions',
          value: '1. Download the support tool from the link above\n2. Extract and run the tool\n3. **Make sure everything is GREEN in every tab**\n4. If anything is red or yellow, follow the instructions to fix it\n5. Once everything is green, you\'re ready to use the cheat',
          inline: false
        },
        {
          name: 'Important',
          value: 'All indicators must be **GREEN** across all tabs before proceeding. If you need help fixing any issues, open a support ticket.',
          inline: false
        }
      )
      .setFooter({ 
        text: 'ChamsCheats',
        iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
      })
      .setImage('https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif');

    await inter.reply({
      embeds: [embed],
      ephemeral: ephemeralStatus
    });
  }
};
