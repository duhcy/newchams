module.exports = async (client, message) => {
    if(message.system || message.author == client.user || message.webhookId != null || message.content == null){
        return;
    }
    else if(message.channelId == client.config.opt.inChannel){
        console.log("Message in Input Channel");
            await client.channels.cache.get(client.config.opt.outChannel).send({content: message.content ,files: attachmentCollectionToArray(message.attachments)});
            console.log("They have perms sending message with image");
            return;
    }
    else if(client.config.opt.modChannels.includes(message.channelId) && (message.content.includes("http") || message.content.includes(".gg") || message.content.includes("discordapp") || message.content.includes(".com") || message.attachments.size > 0)){
        if(message.member.roles.cache.has(client.config.opt.staffRole)){
            return;
        }
        await message.delete();
        console.log(`Deleted link in ${message.channel} from ${message.author.username}.`);
        await message.member.timeout(60000);
        try{
            await client.channels.cache.get(client.config.opt.logChannel).send(`Deleted link in ${message.channel} from ${message.member} (${message.author.username}). Content: ${message.content}`);
        }
        catch{
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