const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'supporttool',
    description: "Support Tool Download",

    async execute({ client, inter, messageFlag }) {
        inter.reply({content: "https://mega.nz/file/e0hihCRD#N6WdBY-rjsmcg_73KhZmArfoFvz0VvAfY6dUcXvZtoA", ephemeral: messageFlag});
    }
}