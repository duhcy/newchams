module.exports = async (client, channel) => {
    // Check if the channel is a text channel in the PayPal/CashApp category
    const PAYPAL_CASHAPP_CATEGORY_ID = "1415459959541465192";
    const NOTIFICATION_USER_ID = "1127800491649273856";
    
    // Only process text channels (not DMs)
    if (!channel.isTextBased() || channel.isDMBased()) {
        return;
    }
    
    // Check if channel is in the PayPal/CashApp category
    if (channel.parentId !== PAYPAL_CASHAPP_CATEGORY_ID) {
        return;
    }
    
    try {
        // Fetch the user
        const user = await client.users.fetch(NOTIFICATION_USER_ID);
        
        // Create the embed
         const newTicketEmbed = {
             title: "New Ticket - PayPal/CashApp",
             description: `A new ticket has been created: ${channel}\n\n**Channel Name:** ${channel.name}`,
             color: 9448166,
            footer: {
                text: "ChamsCheats",
                iconURL: "https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024"
            },
            timestamp: new Date()
        };
        
        // Send DM to user
        await user.send({ embeds: [newTicketEmbed] });
        console.log(`[NEW TICKET] Sent new ticket notification to user ${user.username} for channel ${channel.name} (${channel.id})`);
    } catch (error) {
        console.error(`[NEW TICKET ERROR] Failed to send notification for channel ${channel.name}:`, error);
    }
};
