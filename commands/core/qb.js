const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'qb',
    description: "How to disable find your Ring1 QB",

    async execute({ client, inter, ephemeralStatus }) {
        inter.reply({content: `Ring1 QB Guide 1. How to find and upload your custom build: 2. Go to %LocalAppData%/Ubisoft/r6siege in File Explorer. 3. Open the folder that is created last, or has the latest season and patch number in the name. 4. The scimitar-engine-win64-2022-flto-dxXX.exe in that folder is your custom build. Upload it below. BE SURE TO SELECT THE SAME DX VERSION AS THE ONE YOU USE INGAME.`, ephemeral: ephemeralStatus});
    }
}