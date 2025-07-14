const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'dmaembed',
    description: "Update dma channel",

    async execute({ client, inter, ephemeralStatus }) {
        if(!ephemeralStatus){
const dmaEmbed = new EmbedBuilder()
  .setColor(0x771BCB)
  .setTitle('🔧 What is Direct Memory Access (DMA)?')
  .setThumbnail('https://cdn.discordapp.com/attachments/1139006641442922557/1394148450135969954/Asset_113x.png?ex=6875c16c&is=68746fec&hm=dd43018b66fa19f27bf1332d38efe264a9f5ce34860c65202aea846619111c21&')
  .setDescription(
    '**DMA** is a technique used for game manipulation that involves two PCs. The primary PC runs the game and includes a specialized DMA card capable of directly accessing system memory. A second PC controls the cheat by sending commands to the DMA card, bypassing the CPU to avoid detection while the game is running. This setup enables real-time, stealthy data manipulation.\n\n' +
    '[🛒 Store Link](https://chamscheats.com/dma/)'
  )
  .addFields(
    {
      name: '🖥️ What is an HDMI Fuser?',
      value:
        'An **HDMI Fuser** merges video output from both PCs using HDMI cables, allowing a combined display on one monitor. This enables you to overlay ESP visuals onto your main screen without them appearing on your gaming PC, maintaining discretion during gameplay.\n\n' +
        '[🛒 Store Link](https://chamscheats.com/store/product/41-dichen-6th-gen-fuser/)'
    },
    {
      name: '🖱️ What is a Makcu?',
      value:
        '**Makcu** is an open-source input device designed for DMA-based aimbot configurations. Using dual ESP32-S3 chips, it provides genuine USB passthrough (v3 firmware), delivering realistic, responsive mouse input. It’s faster and more secure than a KM Box—making it ideal for staying undetected on modern anti-cheat systems.\n\n' +
        '[🛒 Store Link](https://chamscheats.com/store/product/243-chams-dma-makcu/)'
    },
    {
      name: '🧠 What is DMA Firmware?',
      value:
        '**Firmware** keeps your DMA setup hidden. It masks the device so that anti-cheat systems misidentify it as a harmless component rather than a DMA tool. This layer of obfuscation protects your system from detection during scans.\n\n' +
        '[🛒 Store Link EAC/BE](https://chamscheats.com/store/product/112-11-custom-fw-eacbe/) | [🛒 Store Link VGK/EAC/BE](https://chamscheats.com/store/product/141-11-custom-fw-eacbevgk/)'
    }
  )

            
            await client.channels.cache.get(client.config.opt.DMACHANNEL).messages.fetch()
                    .then(messages => messages.filter(message => message.author.id === client.user.id).first().edit({ embeds: [dmaEmbed], content: "" }))
                    .catch(console.error);
            await inter.reply({ content: "updated dma embed", ephemeral: true});    
        }
        else{
            inter.reply({ content: "no permission", ephemeral: true});
        }
    }
}
