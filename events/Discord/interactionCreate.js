const { EmbedBuilder, InteractionType, MessageFlags } = require('discord.js');

module.exports = async (client, inter) => {
    //await inter.deferReply({ ephemeral: true });
    if (inter.type === InteractionType.ApplicationCommand) {
        const Staff = client.config.opt.STAFFROLE;
        const command = client.commands.get(inter.commandName);

        if(inter.guild == null){
            return inter.reply({content: "No DMs please", ephemeral: true});
        }
        console.log(`${inter.user.username} user /${inter.commandName}`);
        let ephemeralStatus = true;
        if(inter.member.roles.cache.has(Staff) || inter.member.user.id == client.config.app.dev){
            ephemeralStatus = false;
        }
        command.execute({ inter, client, ephemeralStatus });
    }
}