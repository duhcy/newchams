const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'recordvideo',
  description: 'How to record your screen and upload to Streamable',

  async execute({ inter, ephemeralStatus }) {
    const embed = new EmbedBuilder()
      .setTitle('🎥 How to Record and Upload a Video')
      .setDescription('Follow these steps to record your screen with OBS and upload to Streamable.')
      .setColor(9448166)
      .addFields(
        {
          name: 'Download OBS',
          value: '[Click here to download OBS](https://obsproject.com/download)',
          inline: false
        },
        {
          name: 'Installation',
          value: '1. Visit the download link above\n2. Click **Download Installer**\n3. Run the installer and follow the setup wizard\n4. Launch OBS when installation is complete',
          inline: false
        },
        {
          name: 'Set Up Recording',
          value: '1. Open OBS\n2. In the **Sources** section, click **+** and add **Screen Capture** (or **Window Capture**)\n3. Select your monitor or specific window to record\n4. Click **Start Recording** button in the bottom-right corner',
          inline: false
        },
        {
          name: 'Record Your Screen',
          value: '1. Perform the actions you want to record\n2. Keep OBS window visible (or minimized)\n3. When done, click **Stop Recording** in OBS\n4. OBS saves the video automatically to your computer',
          inline: false
        },
        {
          name: 'Upload to Streamable',
          value: '1. Go to **https://streamable.com/**\n2. Click **Upload** or drag your video file onto the page\n3. Wait for upload and processing to complete\n4. Copy the link and paste it in your support ticket',
          inline: false
        },
        {
          name: 'Tips',
          value: 'Default video location: `C:\\Users\\[YourName]\\Videos\\` (Windows) or `~/Movies/` (Mac)\nKeep recordings under **250 MB** for instant Streamable uploads\nStreamable links expire after **90 days** of no views',
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
