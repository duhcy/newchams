const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'secureboot',
    description: "Instructions on how to disable secure boot",

    async execute({ client, inter }) {
        var messageFlag = false;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = true;
        }
        inter.reply({content: `video on how to disable secure boot: https://www.youtube.com/watch?v=CbgX_Ek76XA`, ephemeral: messageFlag});
    }
}