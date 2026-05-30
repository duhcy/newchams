const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'disablevdb',
  description: 'Disable Vulnerable Driver Blocklist (VDB)',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('Disable Vulnerable Driver Blocklist (VDB)')
      .setDescription('Follow these steps to disable the Vulnerable Driver Blocklist:')
      .setColor(9448166)
      .addFields(
        {
          name: 'Method 1: Registry Editor',
          value: '1. Press **Windows + R**\n2. Type `regedit` and press Enter\n3. Navigate to: `HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\CI\\Config`\n4. Find or create a new **DWORD (32-bit)** value named `VulnerableDriverBlocklistEnable`\n5. Set its value to **0**\n6. Restart your PC',
          inline: false
        },
        {
          name: 'Method 2: Command Prompt',
          value: '1. Open **CMD as Administrator**\n2. Run this command:\n```\nreg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\CI\\Config" /v VulnerableDriverBlocklistEnable /t REG_DWORD /d 0 /f\n```\n3. Restart your PC',
          inline: false
        },
        {
          name: 'Important',
          value: 'This setting prevents Windows from blocking certain drivers that may be flagged as vulnerable.',
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
