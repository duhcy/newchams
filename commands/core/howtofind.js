const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'howtofind',
    description: "Where to find your purchases on website.",

    async execute({ client, inter }) {
        var messageFlag;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = MessageFlags.Ephemeral;
        }
        inter.reply({content: "https://chamscheats.com/clients/purchases", Flags: messageFlag});
    }
}