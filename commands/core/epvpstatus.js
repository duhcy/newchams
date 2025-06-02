const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'epvpstatus',
    description: "Update Epvpstatus",

    async execute({ client, inter, messageFlag }) {
        if(!messageFlag){
            const newEmbed = {  
                color: 0x771BCB,
                title: `EPVP Vouch`,
                description: `**Leave a Trade Request on one of our Elitepvpers Posts to enter the EPVP Vouched Only <#${client.config.opt.GIVEAWAYCHANNEL}>, After done make a ticket via** <#${client.config.opt.TICKETCHANNEL}>`,
                fields:[
                    {
                        value: '[**EFT Next Cheat Pro**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5232468-eft-pro-anti-cheat-emulator-drop-your-dogtag-crosshair-tp-bullet-ricochet.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**EFT Next Cheat Lite**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5232463-eft-lite-anti-cheat-emulator-quest-esp-clean-esp-triggerbot.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**EFT Fanta**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5183928-eft-fanta-legit-cheat-bullet-redirect-built-spoofer-quest-esp.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    //
                    {
                        value: '[**EFT Coffee Lite**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5274613-eft-coffee-lite-legit-cheat-quest-esp-esp-misc-easy-setup.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**EFT Revo DMA**](https://www.elitepvpers.com/forum/escape-tarkov-trading/5110233-eft-revo-dma-streamproof-featureful-clean-visuals.html#post39497161)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[** Apex Playground DMA**](https://www.elitepvpers.com/forum/apex-legends-trading/5259210-apex-playground-dma-perfect-triggerbot-aimbot-esp-misc.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**EVO DMA**](https://www.elitepvpers.com/forum/valorant-trading/5273111-evo-valorant-dma-perfect-vischeck-magdet-trigger-no-memory-shellcode.html#post40167036)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**Rust Matrix**](https://www.elitepvpers.com/forum/rust-trading/5273614-rust-matrix-feature-rich-undetected-instant-delivery.html#post40169249)',
                        name: '\u200b',
                        inline: true,
                    },
                    //
                    {
                        value: '[**Rust Disconnect**](https://www.elitepvpers.com/forum/rust-trading/5222385-rust-disconnect-streamproof-undetected-instant-delivery.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    //
                    {
                        value: '[**FN Disconnect External**](https://www.elitepvpers.com/forum/fortnite-trading/5277984-fn-disconnect-external-full-streamproof-tournament-bypass-triggerbot-aimbot.html#post40187199)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**Marvel Rivals DMA**](https://www.elitepvpers.com/forum/marvel-rivals-trading/5277985-marvel-rivals-dma-fully-streamproof-raytracing-vischeck-no-memory-shellcode.html#post40187203)',
                        name: '\u200b',
                        inline: true,
                    },
                    //
                    {
                        value: '[**Marvel Rivals External**](https://www.elitepvpers.com/forum/marvel-rivals-trading/5277986-marvel-rivals-klar-silent-aim-built-spoofer-never-detected.html#post40187210)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**R6 Ring-1 Lite**](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5216120-r6-lite-most-undetected-r6-cheat-clean-esp-built-spoofer.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**R6 Crusader**](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5217128-r6-crusader-legit-cheat-intel-amd-support-undetected.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**R6 DMA**](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5294299-r6-dma-aimbot-esp-misc-auto-qb-updates.html#post40255381)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**Rust Ultimate**](https://www.elitepvpers.com/forum/rust-trading/5110235-rust-ultimate-legit-cheat-streamproof-never-detected.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**Rust DMA**](https://www.elitepvpers.com/forum/rust-trading/5274504-rust-dma-aimbot-esp-misc-skinchanger.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**FN Calamari**](https://www.elitepvpers.com/forum/fortnite-trading/5282020-fn-calamari-streamproof-magic-bullet-tournament-ready-triggerbot-aimbot.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**PUBG Desync**](https://www.elitepvpers.com/forum/playerunknowns-battlegrounds-trading/5285375-pubg-desync-never-detected-built-spoofer-fully-streamproof.html)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**Delta Force Foah DMA**](https://www.elitepvpers.com/forum/delta-force-hawk-ops-trading/5295274-delta-force-foah-dma-feature-rich-aimbot-esp-misc-clean-esp.html#post40259625)',
                        name: '\u200b',
                        inline: true,
                    },
                    {
                        value: '[**DayZ Next Cheat Pro**](https://www.elitepvpers.com/forum/dayz-trading/5295272-dayz-next-cheat-pro-aimbot-esp-misc-anti-cheat-emulator.html#post40259621)',
                        name: '\u200b',
                        inline: true,
                    }
                ]
            }
            await client.channels.cache.get(client.config.opt.EPVPCHANNEL).messages.fetch()
                    .then(messages => messages.filter(message => message.author.id === client.user.id).first().edit({ embeds: [newEmbed], content: "" }))
                    .catch(console.error);
            await inter.reply({ content: "updated epvp links", ephemeral: true});    
        }
    }
}
