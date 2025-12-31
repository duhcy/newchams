const {
  ApplicationCommandOptionType,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');
const fs = require('fs');
const path = require('path');

filePath = path.join(__dirname, '../../Guides.txt');
const rawTxt = fs.readFileSync(filePath, 'utf-8');

const products = {};
const regex = /-([^\(]+)\(([^)]+)\)/g;
let match;

while ((match = regex.exec(rawTxt)) !== null) {
  const name = match[1].trim();
  const url = match[2].trim();
  products[name] = url;
}

module.exports = {
  name: 'guide',
  description: 'Get the guide for a given product',
  options: [
    {
      name: 'name',
      description: 'Product name',
      type: ApplicationCommandOptionType.String,
      required: true,
      autocomplete: true
    }
  ],

  async execute({ inter, ephemeralStatus }) {
    if (ephemeralStatus) {
      return inter.reply({ content: 'No Permission', ephemeral: true });
    }

    const name = inter.options.getString('name');
    const url = products[name];

    if (!url) {
      return inter.reply({ content: 'Product not found', ephemeral: true });
    }

    const embed = new EmbedBuilder()
      .setTitle(`${name} Guide`)
      .setDescription(
        'Click the button below to open the guide.'
      )
      .setThumbnail(
        'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp'
      )
      .setColor(0x771BCB)
      .setFooter({ text: 'ChamsCheats Guides' })
      .setTimestamp();

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('Open Guide')
        .setStyle(ButtonStyle.Link)
        .setURL(url)
        .setEmoji('📘')
    );

    await inter.reply({
      embeds: [embed],
      components: [row]
    });
  },

  async autocomplete(inter) {
    const focused = inter.options.getFocused();
    const filtered = Object.keys(products).filter(choice =>
      choice.toLowerCase().includes(focused.toLowerCase())
    );

    await inter.respond(
      filtered.slice(0, 25).map(choice => ({
        name: choice,
        value: choice
      }))
    );
  }
};