module.exports = async (client, message) => {
    nonc = Date.now().toString();
    if(message.system || message.author == client.user || message.webhookId != null || message.content == null){
        return;
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
        if(message.member.roles.cache.has(client.config.opt.STAFFROLE) || message.member.roles.cache.has(client.config.opt.GIFPERMS) || message.member.user.id == client.config.app.dev || message.content.includes("https://chamscheats.com") || message.content.includes("https://discord.com/channels/1377753400023974090/")){
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