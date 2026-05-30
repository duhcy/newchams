const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'vc_redist',
  description: 'Fix vc_redist.x64.exe (DLL) Error for AMD Users',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('Fix vc_redist.x64.exe (DLL) Error for AMD Users')
      .setDescription('Follow these steps to resolve the DLL error:')
      .setColor(9448166)
      .addFields(
        {
          name: 'Step 1: Close AMD Processes',
          value: 'Go to Task Manager and close all AMD processes:\n End Task for Radeon\n AMDSrv...\n AMDow\n CPUMetrics\n All other AMD-related processes',
          inline: false
        },
        {
          name: 'Step 2: Navigate to AMD Software Location',
          value: 'Go to the AMD Software installation folder:\n`C:\\Program Files\\AMD\\CNext\\CNext`',
          inline: false
        },
        {
          name: 'Step 3: Download and Extract Libs',
          value: 'Download: [Libs.rar](https://cdn.discordapp.com/attachments/1155954393015914597/1456867763477020863/Libs.rar)\n\nUnzip the Libs.rar file and copy all DLL files to the AMD folder path above.\n**Overwrite** existing files when prompted.',
          inline: false
        },
        {
          name: 'Important',
          value: 'If you can\'t copy DLL files ("file is opened in another program" error), AMD processes are still running.\n\nDouble-check Task Manager and close ALL AMD & Radeon processes.',
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
