const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'supporttool',
    description: "Support Tool Download",

    async execute({ client, inter }) {
        var messageFlag = false;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = true;
        }
        inter.reply({content: "https://mega.nz/file/e0hihCRD#N6WdBY-rjsmcg_73KhZmArfoFvz0VvAfY6dUcXvZtoA", ephemeral: messageFlag});
    }
}