const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'epvptrade',
    description: "Instructions for an Epvp trade.",

    async execute({ client, inter, ephemeralStatus }) {
        /*const embed = new EmbedBuilder()
            .setColor(0x771BCB)
            .setTitle('🛒 How to Send an EPVP Trade')
            .setDescription('Please follow these steps carefully to complete your trade and show support:')
            .addFields(
                {
                    name: '🔗 Step 1: Choose a Post',
                    value: '[Select a post from this channel](https://discord.com/channels/1377753400023974090/1377753400413782082)',
                },
                {
                    name: '🤝 Step 2: Send Trade Request',
                    value: 'Send a trade request on EPVP. Once it’s accepted, leave a **positive comment** on both the **trade** and the **post**.',
                },
                {
                    name: '👍 Step 3: Say Thanks',
                    value: 'Click the **"Thanks"** button on the post.',
                },
                {
                    name: '📝 Step 4: Leave Feedback',
                    value: 'Drop a **positive comment** on our **visitor page** to complete the process.',
                },
            );*/
    const embed = {
    color: 0x771BCB,
    title: '💎 EPVP Vouch Program',
    description: [
        `**✅ Step 1:** Leave a trade request on one of our [Elitepvpers posts](https://www.elitepvpers.com/).`,
        `**🎟️ Step 2:** After you're done, open a ticket via <#${client.config.opt.TICKETCHANNEL}> to access the **EPVP Vouched Only** giveaway channel <#${client.config.opt.GIVEAWAYCHANNEL}>!`
    ].join('\n\n'),
    fields: [
        {
            name: '🎯 Escape From Tarkov',
            value: [
                '[**EFT Next Cheat Pro**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5232468-eft-pro-anti-cheat-emulator-drop-your-dogtag-crosshair-tp-bullet-ricochet.html)',
                '[**EFT Next Cheat Lite**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5232463-eft-lite-anti-cheat-emulator-quest-esp-clean-esp-triggerbot.html)',
                '[**EFT Fanta**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5183928-eft-fanta-legit-cheat-bullet-redirect-built-spoofer-quest-esp.html)',
                '[**EFT Coffee Lite**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5274613-eft-coffee-lite-legit-cheat-quest-esp-esp-misc-easy-setup.html)',
                '[**EFT Revo DMA**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5110233-eft-revo-dma-streamproof-featureful-clean-visuals.html#post39497161)'
            ].join('\n'),
            inline: true
        },
        {
            name: '☣️ Rust',
            value: [
                '[**Rust Matrix**](https://www.elitepvpers.com/forum/rust-trading/5273614-rust-matrix-feature-rich-undetected-instant-delivery.html#post40169249)',
                '[**Rust Disconnect**](https://www.elitepvpers.com/forum/rust-trading/5222385-rust-disconnect-streamproof-undetected-instant-delivery.html)',
                '[**Rust Ultimate**](https://www.elitepvpers.com/forum/rust-trading/5110235-rust-ultimate-legit-cheat-streamproof-never-detected.html)',
                '[**Rust DMA**](https://www.elitepvpers.com/forum/rust-trading/5274504-rust-dma-aimbot-esp-misc-skinchanger.html)'
            ].join('\n'),
            inline: true
        },
        {
            name: '🔫 Rainbow Six Siege',
            value: [
                '[**R6 Ring-1 Lite**](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5216120-r6-lite-most-undetected-r6-cheat-clean-esp-built-spoofer.html)',
                '[**R6 Crusader**](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5217128-r6-crusader-legit-cheat-intel-amd-support-undetected.html)',
                '[**R6 DMA**](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5294299-r6-dma-aimbot-esp-misc-auto-qb-updates.html#post40255381)'
            ].join('\n'),
            inline: true
        },
        {
            name: '🎯 Fortnite',
            value: [
                '[**FN Disconnect External**](https://www.elitepvpers.com/forum/fortnite-trading/5277984-fn-disconnect-external-full-streamproof-tournament-bypass-triggerbot-aimbot.html#post40187199)',
                '[**FN Calamari**](https://www.elitepvpers.com/forum/fortnite-trading/5282020-fn-calamari-streamproof-magic-bullet-tournament-ready-triggerbot-aimbot.html)'
            ].join('\n'),
            inline: true
        },
        {
            name: '🦸 Marvel Rivals',
            value: [
                '[**Marvel Rivals DMA**](https://www.elitepvpers.com/forum/marvel-rivals-trading/5277985-marvel-rivals-dma-fully-streamproof-raytracing-vischeck-no-memory-shellcode.html#post40187203)',
                '[**Marvel Rivals External**](https://www.elitepvpers.com/forum/marvel-rivals-trading/5277986-marvel-rivals-klar-silent-aim-built-spoofer-never-detected.html#post40187210)'
            ].join('\n'),
            inline: true
        },
        {
            name: '🎮 Other Games',
            value: [
                '[**PUBG Desync**](https://www.elitepvpers.com/forum/playerunknowns-battlegrounds-trading/5285375-pubg-desync-never-detected-built-spoofer-fully-streamproof.html)',
                '[**Delta Force Foah DMA**](https://www.elitepvpers.com/forum/delta-force-hawk-ops-trading/5295274-delta-force-foah-dma-feature-rich-aimbot-esp-misc-clean-esp.html#post40259625)',
                '[**DayZ Next Cheat Pro**](https://www.elitepvpers.com/forum/dayz-trading/5295272-dayz-next-cheat-pro-aimbot-esp-misc-anti-cheat-emulator.html#post40259621)',
                '[**Apex Playground DMA**](https://www.elitepvpers.com/forum/apex-legends-trading/5259210-apex-playground-dma-perfect-triggerbot-aimbot-esp-misc.html)',
                '[**EVO DMA (Valorant)**](https://www.elitepvpers.com/forum/valorant-trading/5273111-evo-valorant-dma-perfect-vischeck-magdet-trigger-no-memory-shellcode.html#post40167036)'
            ].join('\n'),
            inline: true
        }
    ],
    footer: {
        text: 'Elitepvpers Vouch System - Verified and Trusted Vendors Only'
    },
    timestamp: new Date()
        };
        inter.reply({embeds: [embed], ephemeral: ephemeralStatus});
    }
}