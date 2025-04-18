const { EmbedBuilder, InteractionType } = require('discord.js');

module.exports = async (client, inter) => {
    //await inter.deferReply({ ephemeral: true });
    if (inter.type === InteractionType.ApplicationCommand) {
        const Staff = client.config.opt.Staff;
        const command = client.commands.get(inter.commandName);

        const errorEmbed = new EmbedBuilder().setColor('#ff0000');

        if (!command) {
            errorEmbed.setDescription('<❌> | Error! Please contact Developers!');
            inter.editReply({ embeds: [errorEmbed], ephemeral: true });
            return client.slash.delete(inter.commandName);
        }
        if(inter.guild == null){
            return;
        }

        command.execute({ inter, client });
    }
}