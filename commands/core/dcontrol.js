const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'dcontrol',
    description: "Windows Defender Controller.",

    async execute({ client, inter, ephemeralStatus }) {
        inter.reply({content: "https://www.mediafire.com/file/wy1lvgmj4vrzycc/DefenderControl.zip/file", ephemeral: ephemeralStatus});
    }
}