const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "vc64",
  description: "Send the Visual C++ Redistributables and DirectX Runtime download embed.",

  async execute({ client, inter, ephemeralStatus }) {
    if (
      inter.user.id === client.config.app.dev ||
      inter.member.roles.cache.has(client.config.opt.STAFFROLE)
    ) {
      const vcEmbed = new EmbedBuilder()
        .setColor(0x3498db) // blue theme for utilities
        .setTitle("📦 Dependency Installer")
        .setDescription("Ensure product compatibility by installing these essential components!")
        .addFields(
          {
            name: "⬇️ Downloads",
            value:
              "[Visual C++ Redistributables](https://aka.ms/vs/17/release/vc_redist.x64.exe)\n" +
              "[DirectX Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=35)",
          },
          {
            name: "ℹ️ Important",
            value:
              "These are often pre-installed by games, but install them here if asked for!",
          }
        )
        .setFooter({ text: "Powered by ChamsCheats • Support Section" });

      return inter.reply({ embeds: [vcEmbed], ephemeral: false });
    } else {
      return inter.reply({
        content: "❌ You don't have permission to use this command.",
        ephemeral: true,
      });
    }
  },
};
