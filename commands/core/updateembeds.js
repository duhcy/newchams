const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'updateembeds',
    description: "Update embeds in various channels",
    options: [
        {
            name: 'embed',
            description: 'Which embed to update',
            type: 3,
            required: false,
            choices: [
                { name: 'EPVP', value: 'epvp' },
                { name: 'DMA', value: 'dma' },
                { name: 'All', value: 'all' }
            ]
        }
    ],

    async execute({ client, inter, ephemeralStatus }) {
        if(!ephemeralStatus){
            const embedChoice = inter.options?.getString('embed') || 'all';
            
            // EPVP Embed
            const epvpEmbed = {
                id: "embed_4",
                type: "rich",
                rawTitle: "EPVP Vouch Program",
                contentScanVersion: 4,
                footer: {
                    text: "ChamsCheats",
                    iconURL: "https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024",
                    iconProxyURL: "https://images-ext-1.discordapp.net/external/Ga5a168wH8dCa6bhQraOg76CxLb__Qc5EmpaIpwL64c/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp"
                },
                color: "hsla(273, calc(var(--saturation-factor, 1) * 79%), 53.3%, 1)",
                image: {
                    url: "https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif",
                    proxyURL: "https://images-ext-1.discordapp.net/external/PJH0cnIxLjQRzVFAwMbSxhy0g8zl9bDY4kMMe-1JCu4/https/cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif",
                    width: 728,
                    height: 90,
                    placeholder: "0PUFGZA4eIiNiPeH54ZwB0c=",
                    placeholderVersion: 1,
                    srcIsAnimated: true,
                    flags: 32,
                    contentType: "image/gif"
                },
                fields: [
                    {
                        rawName: "Step 1",
                        rawValue: "Leave a trade request on one of our [Elitepvpers posts.](https://www.elitepvpers.com/)",
                        inline: false
                    },
                    {
                        rawName: "Step 2",
                        rawValue: "After you're done, open a ticket to access the EPVP Vouched Only giveaway channel\n\n**Ticket:** https://discord.com/channels/1415459957012299918/1415459958195093517\n**Giveaway Channel:** https://discord.com/channels/1415459957012299918/1415459957947633743",
                        inline: false
                    },
                    {
                        rawName: "Escape From Tarkov",
                        rawValue: "**[EFT Next Cheat Pro](https://www.elitepvpers.com/forum/escape-tarkov-trading/5232468-eft-pro-anti-cheat-emulator-drop-your-dogtag-crosshair-tp-bullet-ricochet.html)**\n**[EFT Next Cheat Lite](https://www.elitepvpers.com/forum/escape-tarkov-trading/5232463-eft-lite-anti-cheat-emulator-quest-esp-clean-esp-triggerbot.html)**\n**[EFT Coffee Lite](https://www.elitepvpers.com/forum/escape-tarkov-trading/5274613-eft-coffee-lite-legit-cheat-quest-esp-esp-misc-easy-setup.html)**",
                        inline: true
                    },
                    {
                        rawName: "Rust",
                        rawValue: "**[Rust Disconnect](https://www.elitepvpers.com/forum/rust-trading/5222385-rust-disconnect-streamproof-undetected-instant-delivery.html)**\n**[Rust Ultimate](https://www.elitepvpers.com/forum/rust-trading/5110235-rust-ultimate-legit-cheat-streamproof-never-detected.html)**\n**[Rust DMA](https://www.elitepvpers.com/forum/rust-trading/5308513-blurred-gg-rust-dma-no-shellcode-memory-auto-updater.html#post40324036)**\n**[Rust Recoil Script](https://www.elitepvpers.com/forum/rust-trading/5222385-chams-rust-recoil-script-perfect-recoil-control-all-guns-attachments-never-detected.html#post39940754)**",
                        inline: true
                    },
                    {
                        rawName: "Rainbow Six Siege",
                        rawValue: "**[R6 Crusader](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5217128-r6-crusader-legit-cheat-intel-amd-support-undetected.html)**\n**[R6 DMA](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5294299-r6-dma-aimbot-esp-misc-auto-qb-updates.html#post40255381)**\n**[R6 Recoil Script](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5310676-chams-r6-recoil-script-1-1-recoil-patterns-all-guns-attachments-operator-detection.html#post40334207)**",
                        inline: true
                    },
                    {
                        rawName: "Counter-Strike 2",
                        rawValue: "**[CS2 DMA](https://www.elitepvpers.com/forum/counter-strike-trading/5362699-cs2-dma-shareable-radar-clean-visuals-lineup-helper.html#post40601980)**",
                        inline: true
                    },
                    {
                        rawName: "Fortnite",
                        rawValue: "**[FN Disconnect External](https://www.elitepvpers.com/forum/fortnite-trading/5277984-fn-disconnect-external-full-streamproof-tournament-bypass-triggerbot-aimbot.html#post40187199)**",
                        inline: true
                    },
                    {
                        rawName: "Marvel Rivals",
                        rawValue: "**[Marvel Rivals DMA](https://www.elitepvpers.com/forum/marvel-rivals-trading/5277985-marvel-rivals-dma-fully-streamproof-raytracing-vischeck-no-memory-shellcode.html#post40187203)**",
                        inline: true
                    },
                    {
                        rawName: "Other Games",
                        rawValue: "**[PUBG Desync](https://www.elitepvpers.com/forum/playerunknowns-battlegrounds-trading/5285375-pubg-desync-never-detected-built-spoofer-fully-streamproof.html)**\n**[DayZ Next Cheat Pro](https://www.elitepvpers.com/forum/dayz-trading/5295272-dayz-next-cheat-pro-aimbot-esp-misc-anti-cheat-emulator.html#post40259621)**\n**[RKX Valorant DMA](https://www.elitepvpers.com/forum/valorant-trading/5273111-rkx-valorant-dma-perfect-vischeck-lineup-helper-no-memory-shellcode.html#post40167036)**\n**[Novex Perm Spoofer](https://www.elitepvpers.com/forum/valorant-trading/5308509-novex-perm-spoofer-tpm-supported-arp-mac-address-supports-all-motherboards.html)**",
                        inline: true
                    }
                ]
            };
            
            // DMA Embed
            const dmaEmbed = new EmbedBuilder()
                .setColor(9448166)
                .setTitle('🔧 What is Direct Memory Access (DMA)?')
                .setThumbnail('https://cdn.discordapp.com/attachments/1139006641442922557/1394148450135969954/Asset_113x.png?ex=6875c16c&is=68746fec&hm=dd43018b66fa19f27bf1332d38efe264a9f5ce34860c65202aea846619111c21&')
                .setDescription(
                    `**DMA** is a technique used for game manipulation that involves two PCs.\n\n` +
                    `🖥️ The **primary PC** runs the game and includes a DMA card capable of directly accessing system memory.\n` +
                    `💻 The **secondary PC** sends instructions to the DMA card, bypassing the CPU to avoid detection.\n\n` +
                    `This setup enables **real-time, stealthy memory manipulation** while staying undetected by anti-cheat systems.\n\n` +
                    `🔗 [🛒 Store Link](https://chamscheats.com/dma/)`
                )
                .addFields(
                    {
                        name: '━━━━━━━━━━━━━━━━ 📺 HDMI Fuser ━━━━━━━━━━━━━━━━',
                        value:
                            `**What is it?**\n` +
                            `An **HDMI Fuser** merges video output from both PCs using HDMI cables. It allows you to overlay ESP visuals onto your main display **without showing them on the gaming PC**.\n\n` +
                            `🔒 Keeps ESP hidden from screen recording or spectators.\n\n` +
                            `🔗 [🛒 Store Link](https://chamscheats.com/store/product/41-dichen-6th-gen-fuser/)`
                    },
                    {
                        name: '━━━━━━━━━━━━━━━━ 🖱️ Makcu ━━━━━━━━━━━━━━━━',
                        value:
                            `**What is it?**\n` +
                            `The **Makcu** is an open-source input device used for DMA-based aimbot setups.\n\n` +
                            `⚙️ Powered by **dual ESP32-S3 chips** and offers **real USB passthrough** (v3 firmware).\n` +
                            `⚡ More responsive and secure than traditional KM boxes.\n\n` +
                            `🔗 [🛒 Store Link](https://chamscheats.com/store/product/243-chams-dma-makcu/)`
                    },
                    {
                        name: '━━━━━━━━━━━━━━━━ 🧠 DMA Firmware ━━━━━━━━━━━━━━━━',
                        value:
                            `**What is it?**\n` +
                            `**DMA Firmware** masks the device so it appears harmless to anti-cheat systems.\n\n` +
                            `🛡️ Helps you stay undetected by spoofing hardware identity.\n\n` +
                            `🔗 [🛒 EAC/BE Firmware](https://chamscheats.com/store/product/112-11-custom-fw-eacbe/)\n` +
                            `🔗 [🛒 EAC/BE/VGK Firmware](https://chamscheats.com/store/product/141-11-custom-fw-eacbevgk/)`
                    }
                );
            
            // Update based on choice
            if (embedChoice === 'epvp' || embedChoice === 'all') {
                const epvpChannel = client.channels.cache.get(client.config.opt.EPVPCHANNEL);
                try {
                    const messages = await epvpChannel.messages.fetch();
                    const botMessage = messages.filter(message => message.author.id === client.user.id).first();
                    
                    if (botMessage) {
                        await botMessage.edit({ embeds: [epvpEmbed], content: "" });
                    } else {
                        await epvpChannel.send({ embeds: [epvpEmbed], content: "" });
                    }
                } catch (error) {
                    console.error('Error updating EPVP embed:', error);
                }
            }
            
            if (embedChoice === 'dma' || embedChoice === 'all') {
                const dmaChannel = client.channels.cache.get(client.config.opt.DMACHANNEL);
                try {
                    const messages = await dmaChannel.messages.fetch();
                    const botMessage = messages.filter(message => message.author.id === client.user.id).first();
                    
                    if (botMessage) {
                        await botMessage.edit({ embeds: [dmaEmbed], content: "" });
                    } else {
                        await dmaChannel.send({ embeds: [dmaEmbed], content: "" });
                    }
                } catch (error) {
                    console.error('Error updating DMA embed:', error);
                }
            }
            
            await inter.reply({ content: `Updated ${embedChoice} embed(s)`, ephemeral: true});    
        }
    }
}
