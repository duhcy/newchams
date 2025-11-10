const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "krypttopp",
  description: "Generate a payment embed for a middleman transaction.",
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

  async execute({ client, inter, ephemeralStatus }) {
    const amount = inter.options.getNumber("amount");
    const keyType = inter.options.getString("keytype");

    const feePercent = keyType === "day" ? 0.09 : 0.05;
    const total = (amount * (1 + feePercent)).toFixed(2);

    const paymentEmbed = new EmbedBuilder()
      .setColor(0x771BCB)
      .setTitle("💸 Payment to kryptto")
      .setDescription("Thanks for choosing <@649676406036496431> as your Middleman!")
      .addFields(
        {
          name: "📤 Send Payment",
          value: `Send **${total} USD** to [kryptto’s PayPal](https://www.paypal.me/ConnorDoyle449)`,
        },
        {
          name: "⚠️ Important",
          value:
            "Use **Friends & Family**\nEnsure currency is **USD**\n" +
            `Payment for: ${keyType.charAt(0).toUpperCase() + keyType.slice(1)} Key`,
        }
      )
      .setFooter({ text: "Powered by ChamsCheats • Payment Section" });

      if((inter.user.id == client.config.app.dev) || (inter.member.roles.cache.has(client.config.opt.STAFFROLE))){
            return inter.reply({ embeds: [paymentEmbed], ephemeral: false });
      }
      else{
            return inter.reply({ content: "❌ You don't have permission to use this command.", ephemeral: true });
      }
  },
};
