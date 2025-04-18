const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'tpm',
    description: "How to disable TPM in BIOS",

    async execute({ client, inter, messageFlag }) {
        inter.reply({content: `Here is a video on how to disable TPM in your bios\nhttps://www.youtube.com/watch?v=1V-ZtXzbIQE`, ephemeral: messageFlag});
    }
}