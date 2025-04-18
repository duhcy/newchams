const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'dma',
    description: "DMA Files and Drivers",

    async execute({ client, inter }) {
        var messageFlag;
        if(inter.member.user.id != client.config.app.DEV || !inter.member.roles.cache.has(client.config.opt.STAFFROLE)){
        messageFlag = MessageFlags.Ephemeral;
        }
        inter.reply({content: `**Flash tools and drivers**\nhttps://cdn.discordapp.com/attachments/1254601397266288691/1272941148373258270/flash.rar?ex=67112e53&is=670fdcd3&hm=203497f1c1fdcea92e7f9d97f1e07c01899adc7b7f67fe642f7d9dece752a488&\n\n**DMA DNA ID**\nhttps://cdn.discordapp.com/attachments/1254601397266288691/1266984056583618621/DMA-DNA-ID-main.zip?ex=6711431a&is=670ff19a&hm=23313306767b4cebcdc846662a08dca85cddb3c1ec226badd3b63d1310987107&\n\n**KMBOX STUFF**\n- Video Guide: https://youtu.be/mgucFgakkvo\n- Tools: https://cdn.discordapp.com/attachments/1192432548232560812/1245787315045925064/kmboxNet_Tools20240526.zip?ex=671145d9&is=670ff459&hm=36ff1a568e3fc0f9dd28a6e2c106e95cec8349c6dc97ba978784fb154e5466ae&\n- Updated Firmware: https://cdn.discordapp.com/attachments/1192432548232560812/1252238907798585395/kmboxNet_20240604_12h26m22s.bin?ex=6711ac1d&is=67105a9d&hm=c97ef4141b83d81fd9cd89592ebcb5e0b81e9516474e1985f6dbcafb26cd223d&`, Flags: messageFlag});
    }
}