const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'uninstallvanguard',
  description: 'Uninstall Riot Vanguard',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('Uninstall Riot Vanguard')
      .setDescription('Follow these steps to completely uninstall Riot Vanguard:')
      .setColor(9448166)
      .addFields(
        {
          name: 'Method 1: System Tray',
          value: '1. Look for the **Vanguard icon** in system tray (bottom-right)\n2. Right-click the Vanguard icon\n3. Select **Uninstall Vanguard**\n4. Confirm the uninstallation\n5. Restart your PC',
          inline: false
        },
        {
          name: 'Method 2: Add/Remove Programs',
          value: '1. Press **Windows Key** and search for **Add or remove programs**\n2. Find **Riot Vanguard** in the list\n3. Click on it and select **Uninstall**\n4. Follow the prompts\n5. Restart your PC',
          inline: false
        },
        {
          name: 'Method 3: Manual Removal',
          value: '1. Open **CMD as Administrator**\n2. Run: `sc delete vgc`\n3. Run: `sc delete vgk`\n4. Delete folder: `C:\\Program Files\\Riot Vanguard`\n5. Restart your PC',
          inline: false
        },
        {
          name: 'Important',
          value: 'You won\'t be able to play Valorant or League of Legends without Vanguard. Reinstall it when you want to play Riot games.',
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
