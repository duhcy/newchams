const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'coreiso',
    description: "How to disable Core Isolation",

    async execute({ client, inter }) {
        var messageFlag;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = MessageFlags.Ephemeral;
        }
        inter.reply({content: '## To disable Core Isolation (Memory Integrity) in Windows, follow these steps: ##\nOpen Windows Security.\nNavigate to Device Security.\nClick on Core Isolation Details.\nToggle Memory Integrity to Off.\nRemember to restart your computer to apply changes', Flags: messageFlag});
    }
}