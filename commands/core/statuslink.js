const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'statuslink',
    description: "The Link to see product statuses",

    async execute({ client, inter }) {
        var messageFlag = false;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = true;
        }
        inter.reply({content: "https://chamscheats.com/status/", ephemeral: messageFlag});
    }
}