const fs = require('fs');
const path = require('path');

// Path to persistent storage file
const refundStoragePath = path.join(__dirname, '../../data/refund-channels.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../../data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Load refund channels from file
let refundEmbedSentChannels = new Set();
if (fs.existsSync(refundStoragePath)) {
    try {
        const data = JSON.parse(fs.readFileSync(refundStoragePath, 'utf8'));
        refundEmbedSentChannels = new Set(data);
    } catch (err) {
        console.error('Error loading refund channels:', err);
    }
}

// Function to save channels to file
function saveRefundChannels() {
    try {
        fs.writeFileSync(refundStoragePath, JSON.stringify(Array.from(refundEmbedSentChannels)), 'utf8');
    } catch (err) {
        console.error('Error saving refund channels:', err);
    }
}

// Category IDs for refund monitoring
const REFUND_CATEGORY_IDS = [
    "1415459959541465195",
    "1415459959541465192",
    "1415459959541465190",
    "1415459958195093523"
];

// Function to remove a channel from refund storage
function removeRefundChannel(channelId) {
    if (refundEmbedSentChannels.has(channelId)) {
        refundEmbedSentChannels.delete(channelId);
        saveRefundChannels();
        console.log(`[REFUND EMBED] Removed deleted channel ${channelId} from refund storage`);
    }
}

// Export both the message handler and channel delete cleanup
module.exports = async (client, message) => {
     nonc = Date.now().toString();
     if(message.content.includes("gif") && message.member.roles.cache.has(client.config.opt.GIFPERMS)) { return;}
     if(message.system || message.author == client.user || message.webhookId != null || message.content == null){
         return;
     }
     
     // Check for refund mentions in specified categories
     const channel = await client.channels.fetch(message.channelId).catch(() => null);
     if(channel && REFUND_CATEGORY_IDS.includes(channel.parentId) && !refundEmbedSentChannels.has(message.channelId)) {
         const contentLower = message.content.toLowerCase();
         if(contentLower.includes("refund") || contentLower.includes("dispute") || contentLower.includes("chargeback")) {
              const refundEmbed = {
                  title: "Refund & Dispute Policy",
                   description: "Hey — we noticed you mentioned a refund, dispute, or chargeback.\n\nPlease take a moment to review our refund policy before taking any further action, and a member of our management team has been notified to help you.\n\n[Read our refund policy](https://chamscheats.com/legal/refund-policy/)",
                  color: 9448166,
                 footer: {
                     text: "ChamsBot",
                     iconURL: "https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024"
                 },
                 image: {
                     url: "https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif"
                 }
             };
             
             await message.reply({ embeds: [refundEmbed] });
             refundEmbedSentChannels.add(message.channelId);
             saveRefundChannels();
             console.log(`[REFUND EMBED] Sent refund embed in channel ${message.channelId} (${channel.name}). Triggered by user ${message.author.username}`);
             return;
         }
     }
     
     else if(message.channelId == client.config.opt.ANNOUNCEINPUTCHANNEL){
        console.log("Message in Annoucement Channel");
            await client.channels.cache.get(client.config.opt.ANNOUCEMENTCHANNEL).send({content: message.content ,files: attachmentCollectionToArray(message.attachments), nonce: nonc, enforceNonce: true});
            console.log("They have perms sending message with image");
            return;
    }
    else if(message.channelId == client.config.opt.UPDATEINPUTCHANNEL){
        console.log("Message in Updates Channel");
            await client.channels.cache.get(client.config.opt.UPDATECHANNEL).send({content: message.content ,files: attachmentCollectionToArray(message.attachments), nonce: nonc, enforceNonce: true});
            console.log("They have perms sending message with image");
            return;
    }
    else if(client.config.opt.Channels.includes(message.channelId) && (message.content.includes("http") || message.content.includes(".gg") || message.content.includes("discordapp") || message.content.includes(".com") || message.attachments.size > 0)){
        if(message.member.roles.cache.has(client.config.opt.STAFFROLE)  || message.member.user.id == client.config.app.dev || message.content.includes("https://chamscheats.com") || message.content.includes(`https://discord.com/channels/${client.config.opt.GUILDID}/`)){
            return;
        }
        await message.delete();
        console.log(`Deleted link in ${message.channel} from ${message.author.username}.`);
        await message.member.timeout(60000);
        try{
            await client.channels.cache.get(client.config.opt.LOGCHANNEL).send(`Deleted link in ${message.channel} from ${message.member} (${message.author.username}). Content: ${message.content}`);
            await client.channels.cache.get(client.config.opt.OUTPUT).send(`Deleted link in ${message.channel} from ${message.member} (${message.author.username}). Content: ${message.content}`);
        }
        catch{
            await client.channels.cache.get(client.config.opt.LOGCHANNEL).send(`Deleted link in ${message.channel} from ${message.member} (${message.author.username}). Message is too long to display.`);
            await client.channels.cache.get(client.config.opt.OUTPUT).send(`Deleted link in ${message.channel} from ${message.member} (${message.author.username}). Message is too long to display.`);
            console.log("Cant display deleted link content");
        }
        return;
    }
}

function attachmentCollectionToArray(attachmentCollection) {
    const attachmentArray = [];
  
    attachmentCollection.forEach((attachment) => {
      attachmentArray.push(attachment.url);
    });
  
    return attachmentArray;
  }