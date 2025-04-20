const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'winver',
    description: "Instructions to find your Windows version.",

    async execute({ client, inter, messageFlag }) {
        inter.reply({content: 'Open the Search Bar:\n\nClick on the Search icon in the taskbar (usually a magnifying glass).\nAlternatively, press the Windows key on your keyboard to bring up the search.\nType "winver":\n\nIn the search bar, type winver (without quotes).\nSelect the Result:\n\nYou should see an app or command called winver appear in the search results. Click on it.\nView the Windows Version:\n\nA window will pop up displaying your Windows version and build number.', files: [{ attachment: "winver.png" }], ephemeral: messageFlag});
    }
}