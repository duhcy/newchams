const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'websitestatus',
  description: 'Check if chamscheats.com is online',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('Website Status')
      .setDescription('**Check if chamscheats.com is online**\n\n[Visit Status Page](https://chamscheats.com/status)\n\nView real-time status and uptime information.')
      .setColor(9448166)
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
