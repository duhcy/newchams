const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'dma',
    description: "DMA Files and Drivers",

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor(0x771BCB) // Discord blurple
            .setTitle('🔧 All-In-One Tool for DMA Cards')
            .setDescription('A powerful utility that helps you manage and diagnose your DMA card with ease.')
            .addFields(
                { name: '🧬 DNA ID', value: 'Easily retrieve the DNA ID of your DMA card.' },
                { name: '💾 Flash Firmware', value: 'Flash or update firmware directly through the tool.' },
                { name: '⚡ Speedtest', value: 'Benchmark the speed of your DMA card to ensure optimal performance.' }
            )
            .setURL('https://github.com/kilmu1337/DMA-Tool/releases/')
            .setFooter({ text: 'Click the title or use the link above to get started!' })
            .setTimestamp();
        inter.reply({embeds: [embed], ephemeral: ephemeralStatus});
    }
}