const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'dcontrol',
    description: "Windows Defender Controller.",

    async execute({ client, inter }) {
        var messageFlag = false;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = true;
        }
        inter.reply({content: "https://www.sordum.org/9480/defender-control-v2-1/", ephemeral: messageFlag});
    }
}