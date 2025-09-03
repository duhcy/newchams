const { MessageFlags, ApplicationCommandOptionType } = require('discord.js');
const fs = require('fs');
const path = require('path');

filePath = path.join(__dirname, '../../Guides.txt');
const rawTxt = fs.readFileSync(filePath, 'utf-8');
const products = {};
const regex = /-([^\(]+)\(([^)]+)\)/g;
let match;
while((match = regex.exec(rawTxt)) !== null){
  const name = match[1].trim();
  const url = match[2].trim();
  products[name] = url;
}
//console.log(products);

module.exports = {
    name: 'guide',
    description: "Get The Guide For Given Product",
    options: [
                {
                    name: 'name',
                    description: 'product name',
                    type: ApplicationCommandOptionType.String,
                    required: true,
                    autocomplete: true
                  },
                ],
    

    async execute({ client, inter, ephemeralStatus }) {
      if(ephemeralStatus){
        return inter.reply({content: "No Permission", ephemeral: true});
      }
      const name = inter.options.getString('name');
      const url = products[name];
      if(url){
        inter.reply({content: `Link for ${name} Guide: ${url}`, ephemeral: false});
      }
      else{
        inter.reply({content: `Product not found`, ephemeral: true});
      }
    },
    async autocomplete(inter){
      const focused = inter.options.getFocused();
      const filtered = Object.keys(products).filter(choice =>
        choice.toLowerCase().includes(focused.toLowerCase())
      );
      await inter.respond(filtered.slice(0, 25).map(choice => ({name: choice, value: choice})));
    }
}