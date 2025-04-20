const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'makocashapp',
    description: "Mako CashApp instructions",

    async execute({ client, inter, messageFlag }) {
        if(inter.member.user.id == client.config.app.DEV || inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
            inter.reply({content: "Send money to https://cash.app/$PopMako14"});
        }
    }
}