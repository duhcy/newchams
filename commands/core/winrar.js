const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'winrar',
  description: 'How to install WinRAR',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('How to Install WinRAR')
      .setDescription('You need WinRAR to extract .zip and .rar files from loaders.')
      .setColor(9448166)
      .addFields(
        {
          name: 'Download WinRAR',
          value: '[Click here to download WinRAR](https://www.win-rar.com/)',
          inline: false
        },
        {
          name: 'Installation',
          value: '1. Visit win-rar.com\n2. Download WinRAR for Windows\n3. Run the installer and follow the setup wizard\n4. Complete the installation',
          inline: false
        },
        {
          name: 'How to Extract Files',
          value: '1. Right-click the .zip or .rar file\n2. Choose **Extract Here** (extracts to current folder)\n   OR **Extract to [folder name]** (creates a new folder)\n3. Wait for extraction to complete\n4. Open the extracted folder to access your files',
          inline: false
        },
        {
          name: 'Tip',
          value: 'WinRAR works with all archive formats and is recommended for best compatibility with loaders.',
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
