const { MessageFlags, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'general',
    description: "Change the id of general to moderate.",
    options: [
        {
            name: 'channel',
            description: 'General channelid',
            type: ApplicationCommandOptionType.Channel,
            required: true,
          },
    ],

    async execute({ client, inter, ephemeralStatus }) {
        if(!ephemeralStatus){
            inter.deferReply({ephemeral: true});
            setTimeout(500);
            try{
                channelid = inter.options.get('channel').value;
                jsonData.Channels.push(channelid);
                fs.writeFileSync('config.json', JSON.stringify(jsonData));
                console.log("changed channel");
                return inter.editReply({content: "Channel Changed.", ephemeral: true});
            }
            catch(err){
                console.log(err);
                return inter.editReply({content: "Please input valid channel ID", ephemeral: true});
            }
        }
    }
};