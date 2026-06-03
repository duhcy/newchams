const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'rustdesk',
    description: "RustDesk installer",

    async execute({ client, inter, ephemeralStatus }) {
         const rustdeskEmbed = new EmbedBuilder()
             .setColor(9448166)
            .setTitle("📥 RustDesk Installation Instructions")
            .setDescription("Follow the steps below to install RustDesk and share your connection code.")
            .addFields(
                {
                name: "1️⃣ Download RustDesk",
                value: "[Click here to download RustDesk](https://github.com/rustdesk/rustdesk/releases/download/1.4.1/rustdesk-1.4.1-x86_64.exe)",
                },
                {
                name: "2️⃣ Install RustDesk",
                value: "Run the downloaded installer and follow the on-screen instructions.",
                },
                {
                name: "3️⃣ Open RustDesk",
                value: "After installation, open the application to view your **RustDesk ID and Password**.",
                },
                {
                name: "4️⃣ Share Your Code",
                value: "Post your **RustDesk ID** in this chat so the support team can assist you.",
                }
            )
            .setFooter({ text: "⚠️ Do NOT share your password — only your RustDesk ID." });
        inter.reply({embeds: [rustdeskEmbed], ephemeral: ephemeralStatus});
    }
}