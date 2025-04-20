const { MessageFlags, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'channel',
    description: "Change output channel.",
    options: [
        {
            name: "channelid",
            description: "Channel ID to output to",
            type: ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],

    async execute({ client, interaction}) {
        let tempChannel = "";
        try{
            tempChannel = interaction.options.get('channel').value;
            client.config.opt.outChannel = tempChannel;
        }
        catch{
            interaction.reply({content: "Please enter something", flags: MessageFlags.Ephemeral});
        }
    }
}