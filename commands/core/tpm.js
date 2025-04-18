const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'tpm',
    description: "How to disable TPM in BIOS",

    async execute({ client, inter }) {
        var messageFlag = false;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = true;
        }
        inter.reply({content: `Here is a video on how to disable TPM in your bios\nhttps://www.youtube.com/watch?v=1V-ZtXzbIQE`, ephemeral: messageFlag});
    }
}