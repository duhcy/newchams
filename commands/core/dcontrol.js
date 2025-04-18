const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'dcontrol',
    description: "Windows Defender Controller.",

    async execute({ client, inter, messageFlag }) {
        inter.reply({content: "https://www.sordum.org/9480/defender-control-v2-1/", ephemeral: messageFlag});
    }
}