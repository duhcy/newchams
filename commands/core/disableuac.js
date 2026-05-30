const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'disableuac',
  description: 'Disable User Account Control (UAC)',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('Disable User Account Control (UAC)')
      .setDescription('Follow these steps to disable UAC in Windows:')
      .setColor(9448166)
      .addFields(
        {
          name: 'Method 1: Control Panel',
          value: '1. Press **Windows Key** and search for **UAC**\n2. Click **Change User Account Control settings**\n3. Drag the slider to **Never notify**\n4. Click **OK**\n5. Restart your PC',
          inline: false
        },
        {
          name: 'Method 2: Registry (Advanced)',
          value: '1. Press **Windows + R**\n2. Type `regedit` and press Enter\n3. Navigate to: `HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System`\n4. Find `EnableLUA` and set value to **0**\n5. Restart your PC',
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
