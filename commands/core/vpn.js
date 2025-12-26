const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'vpn',
    description: "VPN usage information for loader access",

    async execute({ client, inter, ephemeralStatus }) {
        const vpnEmbed = new EmbedBuilder()
            .setColor(0x771BCB)
            .setTitle("🌐 VPN Usage Instructions")
            .setDescription("Use a VPN if you experience connection issues with the cheat loader website.")
            .addFields(
                {
                    name: "🛠 When to Use a VPN",
                    value: "A VPN can help bypass connection errors or issues where the loader site does not load properly.",
                },
                {
                    name: "⬇️ Download",
                    value: "[Click here to download TunnelBear](https://www.tunnelbear.com/download)",
                },
                {
                    name: "⚠️ Important",
                    value: "Enable the VPN **only** to access the loader.\n**Disable the VPN before launching the game.**",
                }
            )
            .setFooter({ text: "Do not play while connected to a VPN." });

        inter.reply({ embeds: [vpnEmbed], ephemeral: ephemeralStatus });
    }
};