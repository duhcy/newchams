const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'makocashapp',
    description: "Mako CashApp instructions",
    options: [
            {
                name: 'amount',
                description: 'Amount To Send, Leave Blank if Unsure',
                type: ApplicationCommandOptionType.Channel,
                required: true,
              },
            ],

    async execute({ client, inter, ephemeralStatus }) {
        const amount = interaction.options.getNumber('amount');

        const isDev = interaction.user.id === client.config.app.DEV;
        const isStaff = interaction.member.roles.cache.has(client.config.opt.STAFFROLE);

        if (!isDev && !isStaff) {
            return interaction.reply({ content: "❌ You don't have permission to use this command.", ephemeral: true });
        }

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
            .setFooter({ text: 'Thank you for supporting Mako ❤️', iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp();
            return interaction.reply({ embeds: [embed], ephemeral: false });
    }
}