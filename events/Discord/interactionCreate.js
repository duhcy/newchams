const { EmbedBuilder, InteractionType, MessageFlags } = require('discord.js');
const messageCreate = require('./messageCreate');

module.exports = async (client, inter) => {
    //await inter.deferReply({ ephemeral: true });
    if (inter.type === InteractionType.ApplicationCommand) {
        const Staff = client.config.opt.staffRole;
        const command = client.commands.get(inter.commandName);

        if(inter.guild == null){
            return inter.reply({content: "No DMs please", ephemeral: true});
        }
        console.log(`${inter.user.username} user /${inter.commandName}`);
        if(!inter.member.roles.cache.has(Staff)){
            inter.reply({content: "Staff only command", flags: MessageFlags.Ephemeral});
            return;
        }
        command.execute({ inter, client });
    }
}