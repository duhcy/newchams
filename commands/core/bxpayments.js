const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'bxpayments',
    description: "BX Payment options",

    async execute({ client, inter, messageFlag }) {
        if(inter.member.user.id == client.config.app.DEV || inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
            inter.reply({content: '@CA - https://cash.app/$DaddyDabbyDevito @PP - https://www.paypal.com/paypalme/LSDGAVEMEPTSD'});
        }
    }
}