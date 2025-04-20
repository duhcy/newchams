const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'secureboot',
    description: "Instructions on how to disable secure boot",

    async execute({ client, inter, messageFlag }) {
        inter.reply({content: `video on how to disable secure boot: https://www.youtube.com/watch?v=CbgX_Ek76XA`, ephemeral: messageFlag});
    }
}