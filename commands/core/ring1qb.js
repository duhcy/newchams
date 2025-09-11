const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ring1qb',
    description: "R6 QB upload instructions",

    async execute({ client, inter, ephemeralStatus }) {
        const supportEmbed = new EmbedBuilder()
            .setColor(0x771BCB) // red tone, adjust if you want
            .setTitle("⚠️ Important Support Instructions")
            .setDescription(
                "If you still have issues (**crashes, ESP issues, etc.**) please upload your build file that can be found here:\n\n" +
                "`%LocalAppData%/Ubisoft/r6siege`\n\n" +
                "Upload it to one of the links below, explain the issue in detail (e.g., *crash at X, Y, Z point*), " +
                "and then send the link to the support team."
            )
            .addFields(
                {
                name: "📤 Uploading Links",
                value: "[send.monks.tools](https://send.monks.tools/)\n[send.mni.li](https://send.mni.li/)",
                inline: false,
                }
            )
            .setFooter({ text: "Thank you for helping us resolve the issue faster." })
            .setTimestamp();
        inter.reply({embeds: [supportEmbed], ephemeral: ephemeralStatus});
    }
}