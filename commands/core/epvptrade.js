const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'epvptrade',
    description: "Instructions for an Epvp trade.",

    async execute({ client, interaction }) {
        var messageFlag = false;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = true;
        }
        interaction.reply({content: `Follow these steps:\n\nSelect a post from the above list\nSend a trade request, and then leave a positive comment on the trade once accepted & the post\nPress the 'thanks' button on the post\nLeave a positive comment on our visitor page:`, ephemeral: messageFlag});
    }
}