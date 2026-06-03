module.exports = {
    name: 'dmavideo',
    description: 'DMA tutorial video',

    async execute({ client, inter, ephemeralStatus }) {
        inter.reply({ 
            content: '🎥 **DMA Tutorial Video**\n\nWatch this video for DMA setup instructions:\n\nhttps://www.youtube.com/watch?v=-DxgOm_SRC4',
            ephemeral: ephemeralStatus 
        });
    }
}
