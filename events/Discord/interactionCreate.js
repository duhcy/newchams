const { EmbedBuilder, InteractionType, MessageFlags } = require('discord.js');

module.exports = async (client, inter) => {
    //await inter.deferReply({ ephemeral: true });
    if (inter.type === InteractionType.ApplicationCommand) {
        const Staff = client.config.opt.STAFFROLE;
        const command = client.commands.get(inter.commandName);

        const errorEmbed = new EmbedBuilder().setColor('#ff0000');

        if (!command) {
            errorEmbed.setDescription('<❌> | Error! Please contact Developers!');
            inter.editReply({ embeds: [errorEmbed], ephemeral: true });
            return client.slash.delete(inter.commandName);
        }
        if(inter.guild == null){
            return inter.reply({content: "No DMs please", ephemeral: true});
        }
        console.log(`${inter.user.username} user /${inter.commandName}`);
        let ephemeralStatus = true;
        if(inter.member.user.id == client.config.app.DEV || inter.member.roles.cache.has(Staff)){
            ephemeralStatus = false;
        }
        command.execute({ inter, client, ephemeralStatus });
    }
}