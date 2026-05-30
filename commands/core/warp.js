const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'warp',
  description: '1.1.1.1 WARP VPN',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('1.1.1.1 WARP VPN')
      .setDescription('Fast and free VPN by Cloudflare')
      .setColor(9448166)
      .addFields(
        {
          name: 'Download',
          value: '[Download 1.1.1.1 WARP](https://1.1.1.1/)',
          inline: false
        },
        {
          name: 'How to Use',
          value: '1. Download and install 1.1.1.1 from the link above\n2. Open the app and click the connect button\n3. Wait for the connection to establish\n4. Launch your game or loader',
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
