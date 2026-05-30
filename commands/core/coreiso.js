const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'coreiso',
    description: "How to disable Core Isolation",

    async execute({ client, inter, ephemeralStatus }) {
        const coreIsolationEmbed = new EmbedBuilder()
  .setColor(9448166)
  .setTitle('🛡️ How to Disable Core Isolation (Memory Integrity) in Windows')
  .setDescription('Follow these steps carefully to disable Memory Integrity:')
  .addFields(
    { name: '1️⃣ Open Windows Security', value: 'Click the Start menu and type **Windows Security**, then open it.' },
    { name: '2️⃣ Navigate to Device Security', value: 'In the sidebar, click on **Device Security**.' },
    { name: '3️⃣ Click on Core Isolation Details', value: 'Under the **Core Isolation** section, click **Core Isolation details**.' },
    { name: '4️⃣ Toggle Memory Integrity Off', value: 'Switch **Memory Integrity** to **Off**.' },
    { name: '🔁 Restart Required', value: 'Make sure to **restart your computer** to apply the changes.' }
  )
  .setFooter({ 
    text: 'ChamsCheats',
    iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
  })
  .setImage('https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif')
        inter.reply({embeds: [coreIsolationEmbed], ephemeral: ephemeralStatus});
    }
}