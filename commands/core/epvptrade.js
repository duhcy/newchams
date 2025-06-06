const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'epvptrade',
    description: "Instructions for an Epvp trade.",

    async execute({ client, inter, ephemeralStatus }) {
        inter.reply({content: `# Follow these steps: # \n 1. Select a post from <#${client.config.opt.EPVPCHANNEL}>\n 2. Send a trade request, and then leave a positive comment on the trade once accepted & the post\n 3. Press the 'thanks' button on the post\n 4. Leave a positive comment on our visitor page:`, ephemeral: ephemeralStatus});
    }
}