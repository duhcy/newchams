const { MessageFlags, ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'makocashapp',
    description: "Mako CashApp instructions",
    options: [
            {
                name: 'amount',
                description: 'Amount To Send, Leave Blank if Unsure',
                type: ApplicationCommandOptionType.Number,
                required: false,
              },
            ],

    async execute({ client, inter, ephemeralStatus }) {
        amount = null;
        try{
            amount = inter.options.getNumber('amount');
        }
        catch{
            console.log("No value for makoca");
        }

        if((inter.user.id == client.config.app.dev) || (inter.member.roles.cache.has(client.config.opt.STAFFROLE))){
            const cashAppTag = '$PopMako14';
            const cashAppUrl = `https://cash.app/${cashAppTag}`;

            const embed = new EmbedBuilder()
                .setColor(0x00C244) // Cash App green
                .setTitle('💸 Send Money via Cash App')
                .setDescription(`Please send funds to **[${cashAppTag}](${cashAppUrl})**.`)
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/3/39/Cash_App_Logo.svg') // Optional: Cash App logo
                .addFields(
                    amount ? {
                        name: '💰 Requested Amount',
                        value: `\`$${amount.toFixed(2)}\``,
                        inline: true
                    } : {}
                )
                .setFooter({ text: 'Thank you for supporting Mako ❤️', iconURL: inter.user.displayAvatarURL() })
                .setTimestamp();
                return inter.reply({ embeds: [embed], ephemeral: false });
        }
        else{
            console.log(inter.user.id + " + " + client.config.app.dev);
            return inter.reply({ content: "❌ You don't have permission to use this command.", ephemeral: true });
        }
    }
}