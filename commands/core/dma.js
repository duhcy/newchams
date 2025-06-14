const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'dma',
    description: "DMA Files and Drivers",

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor('#5865F2') // Discord blurple
            .setTitle('🔧 All-In-One Tool for DMA Cards')
            .setDescription('A powerful utility that helps you manage and diagnose your DMA card with ease.')
            .addFields(
                { name: '🧬 DNA ID', value: 'Easily retrieve the DNA ID of your DMA card.' },
                { name: '💾 Flash Firmware', value: 'Flash or update firmware directly through the tool.' },
                { name: '⚡ Speedtest', value: 'Benchmark the speed of your DMA card to ensure optimal performance.' }
            )
            .setURL('https://cdn.discordapp.com/attachments/1254601397266288691/1373050521509953577/AIODMATool.rar?ex=684e9332&is=684d41b2&hm=e87d936b583765d70f73044808ddd221a8e2c0a9f7ada3c4ac24c03dfb79b28e&')
            .setFooter({ text: 'Click the title or use the link above to get started!' })
            .setTimestamp();
        inter.reply({embeds: [embed], ephemeral: ephemeralStatus});
    }
}