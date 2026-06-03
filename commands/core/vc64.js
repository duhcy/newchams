const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "vc64",
  description: "Send the Visual C++ Redistributables and DirectX Runtime download embed.",

  async execute({ client, inter, ephemeralStatus }) {
    const vcEmbed = new EmbedBuilder()
      .setColor(9448166)
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

    await inter.reply({ embeds: [vcEmbed], ephemeral: ephemeralStatus });
  },
};
