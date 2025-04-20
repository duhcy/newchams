const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'coreiso',
    description: "How to disable Core Isolation",

    async execute({ client, inter, messageFlag }) {
        inter.reply({content: '## To disable Core Isolation (Memory Integrity) in Windows, follow these steps: ##\nOpen Windows Security.\nNavigate to Device Security.\nClick on Core Isolation Details.\nToggle Memory Integrity to Off.\nRemember to restart your computer to apply changes', ephemeral: messageFlag});
    }
}