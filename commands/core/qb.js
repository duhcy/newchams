const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'qb',
    description: "How to disable find your Ring1 QB",

    async execute({ client, inter, ephemeralStatus }) {
         const embed = new EmbedBuilder()
   .setTitle('📘 Ring1 QB Guide')
   .setColor(9448166)
  .setDescription('Follow these steps to locate and upload your **custom build** for Ring1 QB.')
  .addFields(
    {
      name: '🔍 Step 1: Locate the Build Folder',
      value: 'Open **File Explorer** and go to:\n`%LocalAppData%/Ubisoft/r6siege`',
    },
    {
      name: '📂 Step 2: Open the Latest Folder',
      value: 'Look for the folder that was created last, or contains the **latest season and patch number** in its name.',
    },
    {
      name: '⚙️ Step 3: Find the Build File',
       value: 'Inside that folder, locate the file named:\n`RainbowSix.exe`\nMake sure it matches the **DirectX version** you use in-game!',
    },
    {
      name: '📤 Step 4: Upload the File',
      value: 'Upload the custom build `.exe` **below this message**.',
    }
  )
  .setFooter({ text: 'Be sure to match the correct DirectX version!' });
        inter.reply({embeds: [embed], ephemeral: ephemeralStatus});
    }
}