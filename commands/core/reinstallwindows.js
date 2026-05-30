const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'reinstallwindows',
  description: 'Reinstall Windows',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('Reinstall Windows')
      .setDescription('Use only official Microsoft installers and back up important files first.')
      .setColor(9448166)
      .addFields(
        {
          name: 'Before You Start',
          value: '1. Back up files from Desktop, Documents, and Downloads\n2. Save game/account logins\n3. Have at least 16GB USB ready\n4. Keep your Windows key if your license is not digital',
          inline: false
        },
        {
          name: 'Windows 11 (Official)',
          value: '• Download page: https://www.microsoft.com/software-download/windows11\n• Installation Assistant (in-place upgrade)\n• Media Creation Tool (bootable USB)\n• ISO download (clean install)',
          inline: false
        },
        {
          name: 'Windows 10 (Official)',
          value: '• Download page: https://www.microsoft.com/software-download/windows10\n• Media Creation Tool (bootable USB)\n• ISO download (clean install)',
          inline: false
        },
        {
          name: 'Clean Install (USB Method)',
          value: '1. Create USB installer with Media Creation Tool\n2. Reboot and enter boot menu (F8/F11/F12/Esc depending on board)\n3. Boot from USB\n4. Choose Custom Install\n5. Select OS drive and continue setup\n6. Install chipset/GPU/network drivers after first boot',
          inline: false
        },
        {
          name: 'Video Guide',
          value: '[Windows 11 reinstall tutorials](https://www.youtube.com/results?search_query=how+to+reinstall+windows+11+from+usb)\n[Windows 10 reinstall tutorials](https://www.youtube.com/results?search_query=how+to+reinstall+windows+10+from+usb)',
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
