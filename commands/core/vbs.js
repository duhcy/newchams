const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'vbs',
  description: 'Virtualization-based Security (VBS)',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('Virtualization-based Security (VBS)')
      .setDescription('How to enable or disable VBS using Command Prompt:')
      .setColor(9448166)
      .addFields(
        {
          name: 'Disable VBS',
          value: '1. Open Command Prompt as Administrator\n2. Run this command:\n```\nbcdedit /set hypervisorlaunchtype off\n```\n3. Restart your PC',
          inline: false
        },
        {
          name: 'Enable VBS',
          value: '1. Open Command Prompt as Administrator\n2. Run this command:\n```\nbcdedit /set hypervisorlaunchtype auto\n```\n3. Restart your PC',
          inline: false
        },
        {
          name: 'Important',
          value: 'You must restart your computer for changes to take effect.',
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
