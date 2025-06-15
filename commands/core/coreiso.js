const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'coreiso',
    description: "How to disable Core Isolation",

    async execute({ client, inter, ephemeralStatus }) {
        const coreIsolationEmbed = new EmbedBuilder()
  .setColor(0x2f3136) // Dark gray color
  .setTitle('🛡️ How to Disable Core Isolation (Memory Integrity) in Windows')
  .setDescription('Follow these steps carefully to disable Memory Integrity:')
  .addFields(
    { name: '1️⃣ Open Windows Security', value: 'Click the Start menu and type **Windows Security**, then open it.' },
    { name: '2️⃣ Navigate to Device Security', value: 'In the sidebar, click on **Device Security**.' },
    { name: '3️⃣ Click on Core Isolation Details', value: 'Under the **Core Isolation** section, click **Core Isolation details**.' },
    { name: '4️⃣ Toggle Memory Integrity Off', value: 'Switch **Memory Integrity** to **Off**.' },
    { name: '🔁 Restart Required', value: 'Make sure to **restart your computer** to apply the changes.' }
  )
        inter.reply({embeds: [coreIsolationEmbed], ephemeral: ephemeralStatus});
    }
}