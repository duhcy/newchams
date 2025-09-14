const { EmbedBuilder } = require("discord.js");

const reviewEmbed = new EmbedBuilder()
  .setColor(0x771BCB) // Trustpilot green
  .setTitle("Leave Us a Review ⭐")
  .setDescription("We value your feedback! Please consider leaving us a review on **[Trustpilot](https://www.trustpilot.com/review/chamscheats.com)**.")
  .setThumbnail("https://www.pngfind.com/pngs/b/241-2418037_japanese-maple-png.png")
  .setFooter({ text: "Thank you for supporting us ❤️" });

module.exports = {
    name: "trustpilot",
    description: "Send the Trustpilot review embed",
  
 async execute({ client, inter, ephemeralStatus }) {
    await inter.reply({ embeds: [reviewEmbed], ephemeral: ephemeralStatus });
  },
};