const fs = require('fs');
const path = require('path');

// Path to persistent storage file
const refundStoragePath = path.join(__dirname, '../../data/refund-channels.json');

module.exports = async (client, channel) => {
    // Load current refund channels from file
    let refundEmbedSentChannels = new Set();
    try {
        if (fs.existsSync(refundStoragePath)) {
            const data = JSON.parse(fs.readFileSync(refundStoragePath, 'utf8'));
            refundEmbedSentChannels = new Set(data);
        }
    } catch (err) {
        console.error('Error loading refund channels:', err);
        return;
    }

    // Check if the deleted channel is in the refund storage
    if (refundEmbedSentChannels.has(channel.id)) {
        try {
            // Remove the channel from the set
            refundEmbedSentChannels.delete(channel.id);
            
            // Save the updated set back to file
            fs.writeFileSync(refundStoragePath, JSON.stringify(Array.from(refundEmbedSentChannels)), 'utf8');
            
            console.log(`[REFUND EMBED] Removed deleted channel ${channel.id} (${channel.name}) from refund storage`);
        } catch (err) {
            console.error('Error updating refund channels file:', err);
        }
    }
};
