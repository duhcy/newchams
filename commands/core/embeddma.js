const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'embeddma',
    description: "Update dma channel",

    async execute({ client, inter, ephemeralStatus }) {
        if(!ephemeralStatus){
        const dmaEmbed = new EmbedBuilder()
          .setColor(0x771BCB)
          .setTitle('🔧 What is Direct Memory Access (DMA)?')
          .setThumbnail('https://cdn.discordapp.com/attachments/1139006641442922557/1394148450135969954/Asset_113x.png?ex=6875c16c&is=68746fec&hm=dd43018b66fa19f27bf1332d38efe264a9f5ce34860c65202aea846619111c21&')
          .setDescription(
            `**DMA** is a technique used for game manipulation that involves two PCs.\n\n` +
            `🖥️ The **primary PC** runs the game and includes a DMA card capable of directly accessing system memory.\n` +
            `💻 The **secondary PC** sends instructions to the DMA card, bypassing the CPU to avoid detection.\n\n` +
            `This setup enables **real-time, stealthy memory manipulation** while staying undetected by anti-cheat systems.\n\n` +
            `🔗 [🛒 Store Link](https://chamscheats.com/dma/)`
          )
          .addFields(
            {
              name: '━━━━━━━━━━━━━━━━ 📺 HDMI Fuser ━━━━━━━━━━━━━━━━',
              value:
                `**What is it?**\n` +
                `An **HDMI Fuser** merges video output from both PCs using HDMI cables. It allows you to overlay ESP visuals onto your main display **without showing them on the gaming PC**.\n\n` +
                `🔒 Keeps ESP hidden from screen recording or spectators.\n\n` +
                `🔗 [🛒 Store Link](https://chamscheats.com/store/product/41-dichen-6th-gen-fuser/)`
            },
            {
              name: '━━━━━━━━━━━━━━━━ 🖱️ Makcu ━━━━━━━━━━━━━━━━',
              value:
                `**What is it?**\n` +
                `The **Makcu** is an open-source input device used for DMA-based aimbot setups.\n\n` +
                `⚙️ Powered by **dual ESP32-S3 chips** and offers **real USB passthrough** (v3 firmware).\n` +
                `⚡ More responsive and secure than traditional KM boxes.\n\n` +
                `🔗 [🛒 Store Link](https://chamscheats.com/store/product/243-chams-dma-makcu/)`
            },
            {
              name: '━━━━━━━━━━━━━━━━ 🧠 DMA Firmware ━━━━━━━━━━━━━━━━',
              value:
                `**What is it?**\n` +
                `**DMA Firmware** masks the device so it appears harmless to anti-cheat systems.\n\n` +
                `🛡️ Helps you stay undetected by spoofing hardware identity.\n\n` +
                `🔗 [🛒 EAC/BE Firmware](https://chamscheats.com/store/product/112-11-custom-fw-eacbe/)\n` +
                `🔗 [🛒 EAC/BE/VGK Firmware](https://chamscheats.com/store/product/141-11-custom-fw-eacbevgk/)`
            }
          );

            
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
