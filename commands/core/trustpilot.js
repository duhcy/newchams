const { EmbedBuilder } = require("discord.js");

const reviewEmbed = new EmbedBuilder()
  .setColor(0x00b67a) // Trustpilot green
  .setTitle("Leave Us a Review ⭐")
  .setDescription("We value your feedback! Please consider leaving us a review on **[Trustpilot](https://www.trustpilot.com/review/chamscheats.com)**.")
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/6/6e/Trustpilot_logo.png")
  .setFooter({ text: "Thank you for supporting us ❤️" });

module.exports = {
    name: "trustpilot",
    description: "Send the Trustpilot review embed",
  
 async execute({ client, inter, ephemeralStatus }) {
    await inter.reply({ embeds: [reviewEmbed], ephemeral: ephemeralStatus });
  },
};