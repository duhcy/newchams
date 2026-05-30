const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'streamable',
  description: 'How to upload a video with Streamable',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('How to Upload a Video with Streamable')
      .setDescription('Use [Streamable](https://streamable.com/) to quickly upload and share video clips with support.')
      .setColor(9448166)
      .addFields(
        {
          name: 'Steps',
          value: '1. Go to **https://streamable.com/**\n2. Click **Upload** or drag and drop your video file onto the page\n3. Wait for the upload and processing to finish\n4. Copy the link from your browser\'s address bar\n5. Paste the link in your ticket',
          inline: false
        },
        {
          name: 'Tips',
          value: '• No account required - uploads are instant\n• Supported formats: MP4, MOV, AVI, MKV, and more\n• Max file size: **250 MB** (free)\n• Links expire after **90 days** of no views',
          inline: false
        },
        {
          name: 'Link',
          value: 'https://streamable.com/',
          inline: false
        }
      )
      .setFooter({ 
        text: 'ChamsCheats',
        iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
      })
      .setImage('https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif');

    await inter.reply({
      embeds: [embed],
      ephemeral: ephemeralStatus
    });
  }
};
