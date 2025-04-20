module.exports = async (client, member) => {
    client.on('guildMemberRemove', (member) => {
        try{
            joinedTime = new Date();
            console.log(`${member.user.username} Joined At: ${member.joinedAt}`);
            console.log(`${member.user.username} Joined Timestamp: ${member.joinedTimestamp}`);
            if(member.joinedTimestamp == null){
                const noJoinEmbed = {
                    color: 0x1F4EAD,
                    title: `${member.user.username} left the server`,
                    description: `<@${member.user.id}>\n **Account Created** <t:${parseInt(member.user.createdTimestamp / 1000, 10)}:D> (<t:${parseInt(member.user.createdTimestamp / 1000, 10)}:R>)`,
                    thumbnail: {
                        url: member.user.avatarURL()
                    },
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: 'Starlight',
                        icon_url: 'https://cdn.discordapp.com/avatars/1266068975054356532/c9f103ea17dc7fa702c24c51b7b08c1a.webp?size=4096',
                    },
                }
                client.channels.cache.get(process.env.LOGCHANNEL).send({ embeds: [noJoinEmbed] });
            }
            else{
                console.log(`Date.now = ${Date.now()}`);
                joinedTime = parseInt((Date.now() - member.joinedTimestamp) / 1000, 10);
                console.log(`Joined For ${joinedTime} seconds`);
                joinedTimeDescription = "";
                joinedDays = parseInt(joinedTime / 86400, 10);
                joinedHours = parseInt((joinedTime - (joinedDays * 86400)) / 3600, 10);
                joinedMinutes = parseInt((joinedTime - (joinedDays * 86400) - (joinedHours * 3600)) / 60, 10);
                joinedSeconds = parseInt(joinedTime - (joinedDays * 86400) - (joinedHours * 3600) - (joinedMinutes * 60), 10);
                if(joinedDays > 1){
                    joinedTimeDescription += `${joinedDays} Days, `;
                }
                if(joinedDays == 1){
                    joinedTimeDescription += `1 Day, `;
                }
                if(joinedHours > 0){
                    joinedTimeDescription += `${joinedHours} Hours, `;
                }
                if(joinedMinutes == 1){
                    joinedTimeDescription += `1 Minute `;
                }
                if(joinedMinutes > 1){
                    joinedTimeDescription += `${joinedMinutes} Minutes, `;
                }  
                if((joinedHours > 0 || joinedMinutes > 0 || joinedDays > 0) && joinedSeconds > 0){
                    joinedTimeDescription += `and ${joinedSeconds} Seconds`;
                }
                else if(joinedSeconds > 0 && joinedHours == 0 && joinedMinutes == 0 && joinedDays == 0){
                    joinedTimeDescription = `${joinedSeconds} Seconds`;
                }
                console.log(`${joinedHours} Hours, ${joinedMinutes} Minutes, and ${joinedSeconds}`);
                const newEmbed = {
                    color: 0x1F4EAD,
                    title: `${member.user.username} left the server`,
                    description: `<@${member.user.id}>\n **Joined For** ${joinedTimeDescription}\n **Account Created** <t:${parseInt(member.user.createdTimestamp / 1000, 10)}:D> (<t:${parseInt(member.user.createdTimestamp / 1000, 10)}:R>)`,
                    thumbnail: {
                        url: member.user.avatarURL()
                    },
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: 'Starlight',
                        icon_url: 'https://cdn.discordapp.com/avatars/1266068975054356532/c9f103ea17dc7fa702c24c51b7b08c1a.webp?size=4096',
                    },
                }
                client.channels.cache.get(process.env.LOGCHANNEL).send({ embeds: [newEmbed] });
            }
        }
        catch(err){
            console.log(err);
            client.users.cache.get(process.env.DEV).send("Unable to send log");
        }
    })
}