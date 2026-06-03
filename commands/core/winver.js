const { MessageFlags, EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
    name: 'winver',
    description: "Instructions to find your Windows version.",

    async execute({ client, inter, ephemeralStatus }) {
        const winverEmbed = new EmbedBuilder()
   .setColor(9448166)
  .setTitle('🪟 How to Check Your Windows Version (winver)')
  .setDescription('Follow these steps to find out your current Windows version:')
  .addFields(
    {
      name: '🔍 1. Open the Search Bar',
      value: 'Click the **Search icon** in the taskbar (magnifying glass),\nor press the **Windows key** to open the search menu.',
    },
    {
      name: '⌨️ 2. Type "winver"',
      value: 'Type `winver` (without quotes) in the search bar.',
    },
    {
      name: '📄 3. Select the Result',
      value: 'Click the **winver** app or command from the search results.',
    },
    {
      name: '🪟 4. View Windows Version',
      value: 'A window will appear showing your **Windows version** and **build number**.',
    }
  )
  .setImage('attachment://winver.png')
  .setFooter({ text: 'Tip: This is useful when checking compatibility or troubleshooting.' });
        inter.reply({embeds: [winverEmbed], files: [{ attachment: "winver.png" }], ephemeral: ephemeralStatus});
    }
}