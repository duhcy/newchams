const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "spookyca",
  description: "Generate a payment embed for sending money to Spooky via Cash App.",
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

  async execute({client, inter, ephemeralStatus }) {
    const amount = inter.options.getNumber("amount");
    const keyType = inter.options.getString("keytype");
    const feePercent = keyType === "day" ? 0.09 : 0.05;
    const total = (amount * (1 + feePercent)).toFixed(2);

    const makoEmbed = new EmbedBuilder()
      .setColor(9448166) 
      .setTitle("💸 Payment to Spooky")
      .setDescription("Thanks for choosing <@1127800491649273856> as your Middleman!")
      .addFields(
        {
          name: "📤 Send Payment",
          value: `Send **${total} USD** to [Spookys's Cash App](https://cash.app/$janaexlouisee)`,
        },
        {
          name: "⚠️ Important",
          value:
            "Ensure currency is **USD**\n" +
            `Payment for: ${keyType.charAt(0).toUpperCase() + keyType.slice(1)} Key`,
        }
      )
      .setFooter({ 
        text: "ChamsCheats",
        iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
      })
      .setImage('https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif');

    if((inter.user.id == client.config.app.dev) || (inter.member.roles.cache.has(client.config.opt.STAFFROLE))){
                return inter.reply({ embeds: [makoEmbed], ephemeral: false });
      }
      else{
            return inter.reply({ content: "❌ You don't have permission to use this command.", ephemeral: true });
      }
  },
};
