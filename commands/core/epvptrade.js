const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'epvptrade',
    description: "Instructions for an Epvp trade.",

    async execute({ client, inter, ephemeralStatus }) {
        const embed = new EmbedBuilder()
            .setColor(0x00AE86)
            .setTitle('🛒 How to Send an EPVP Trade')
            .setDescription('Please follow these steps carefully to complete your trade and show support:')
            .addFields(
                {
                    name: '🔗 Step 1: Choose a Post',
                    value: '[Select a post from this channel](https://discord.com/channels/1377753400023974090/1377753400413782082)',
                },
                {
                    name: '🤝 Step 2: Send Trade Request',
                    value: 'Send a trade request on EPVP. Once it’s accepted, leave a **positive comment** on both the **trade** and the **post**.',
                },
                {
                    name: '👍 Step 3: Say Thanks',
                    value: 'Click the **"Thanks"** button on the post.',
                },
                {
                    name: '📝 Step 4: Leave Feedback',
                    value: 'Drop a **positive comment** on our **visitor page** to complete the process.',
                },
            );
        inter.reply({embeds: [embed], ephemeral: ephemeralStatus});
    }
}