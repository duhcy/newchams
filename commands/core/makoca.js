const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "makoca",
  description: "Generate a payment embed for sending money to Mako via Cash App.",
  options: [
    {
      name: "amount",
      description: "Base payment amount in USD.",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
    {
      name: "keytype",
      description: "Select the key type (day, week, or month).",
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        { name: "Day Key", value: "day" },
        { name: "Week/Month Key", value: "week" }
      ],
    },
  ],

  async execute({ inter, ephemeralStatus }) {
    const amount = inter.options.getNumber("amount");
    const keyType = inter.options.getString("keytype");
    const feePercent = keyType === "day" ? 0.09 : 0.05;
    const total = (amount * (1 + feePercent)).toFixed(2);

    const makoEmbed = new EmbedBuilder()
      .setColor(0x771BCB) 
      .setTitle("💸 Payment to Mako")
      .setDescription("Thanks for choosing <@1237682838632005683> as your Middleman!")
      .addFields(
        {
          name: "📤 Send Payment",
          value: `Send **${total} USD** to [Mako’s Cash App](https://cash.app/$PopMako14)`,
        },
        {
          name: "⚠️ Important",
          value:
            "Ensure currency is **USD**\n" +
            `Payment for: ${keyType.charAt(0).toUpperCase() + keyType.slice(1)} Key`,
        }
      )
      .setFooter({ text: "Powered by ChamsCheats • Payment Section" });

    await inter.reply({ embeds: [makoEmbed], ephemeral: ephemeralStatus });
  },
};
