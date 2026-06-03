const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'epvptrade',
    description: "Instructions for an Epvp trade.",

    async execute({ client, inter, ephemeralStatus }) {
         const embed = new EmbedBuilder()
             .setTitle('EPVP Vouch Program')
             .setColor(9448166)
            .setImage('https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif')
            .setFooter({
                text: 'ChamsCheats',
                iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
            })
            .addFields(
                {
                    name: 'Step 1',
                    value: 'Leave a trade request on one of our [Elitepvpers posts.](https://www.elitepvpers.com/)',
                    inline: false
                },
                {
                    name: 'Step 2',
                    value: 'After you\'re done, open a ticket to access the EPVP Vouched Only giveaway channel\n\n**Ticket:** https://discord.com/channels/1415459957012299918/1415459958195093517\n**Giveaway Channel:** https://discord.com/channels/1415459957012299918/1415459957947633743',
                    inline: false
                },
                {
                    name: 'Escape From Tarkov',
                    value: '**[EFT Next Cheat Pro](https://www.elitepvpers.com/forum/escape-tarkov-trading/5232468-eft-pro-anti-cheat-emulator-drop-your-dogtag-crosshair-tp-bullet-ricochet.html)**\n**[EFT Next Cheat Lite](https://www.elitepvpers.com/forum/escape-tarkov-trading/5232463-eft-lite-anti-cheat-emulator-quest-esp-clean-esp-triggerbot.html)**\n**[EFT Coffee Lite](https://www.elitepvpers.com/forum/escape-tarkov-trading/5274613-eft-coffee-lite-legit-cheat-quest-esp-esp-misc-easy-setup.html)**',
                    inline: true
                },
                {
                    name: 'Rust',
                    value: '**[Rust Disconnect](https://www.elitepvpers.com/forum/rust-trading/5222385-rust-disconnect-streamproof-undetected-instant-delivery.html)**\n**[Rust Ultimate](https://www.elitepvpers.com/forum/rust-trading/5110235-rust-ultimate-legit-cheat-streamproof-never-detected.html)**\n**[Rust DMA](https://www.elitepvpers.com/forum/rust-trading/5308513-blurred-gg-rust-dma-no-shellcode-memory-auto-updater.html#post40324036)**\n**[Rust Recoil Script](https://www.elitepvpers.com/forum/rust-trading/5222385-chams-rust-recoil-script-perfect-recoil-control-all-guns-attachments-never-detected.html#post39940754)**',
                    inline: true
                },
                {
                    name: 'Rainbow Six Siege',
                    value: '**[R6 Crusader](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5217128-r6-crusader-legit-cheat-intel-amd-support-undetected.html)**\n**[R6 DMA](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5294299-r6-dma-aimbot-esp-misc-auto-qb-updates.html#post40255381)**\n**[R6 Recoil Script](https://www.elitepvpers.com/forum/rainbow-six-siege-trading/5310676-chams-r6-recoil-script-1-1-recoil-patterns-all-guns-attachments-operator-detection.html#post40334207)**',
                    inline: true
                },
                {
                    name: 'Fortnite',
                    value: '**[FN Disconnect External](https://www.elitepvpers.com/forum/fortnite-trading/5277984-fn-disconnect-external-full-streamproof-tournament-bypass-triggerbot-aimbot.html#post40187199)**',
                    inline: true
                },
                {
                    name: 'Marvel Rivals',
                    value: '**[Marvel Rivals DMA](https://www.elitepvpers.com/forum/marvel-rivals-trading/5277985-marvel-rivals-dma-fully-streamproof-raytracing-vischeck-no-memory-shellcode.html#post40187203)**',
                    inline: true
                },
                {
                    name: 'Other Games',
                    value: '**[PUBG Desync](https://www.elitepvpers.com/forum/playerunknowns-battlegrounds-trading/5285375-pubg-desync-never-detected-built-spoofer-fully-streamproof.html)**\n**[DayZ Next Cheat Pro](https://www.elitepvpers.com/forum/dayz-trading/5295272-dayz-next-cheat-pro-aimbot-esp-misc-anti-cheat-emulator.html#post40259621)**\n**[RKX Valorant DMA](https://www.elitepvpers.com/forum/valorant-trading/5273111-rkx-valorant-dma-perfect-vischeck-lineup-helper-no-memory-shellcode.html#post40167036)**\n**[Novex Perm Spoofer](https://www.elitepvpers.com/forum/valorant-trading/5308509-novex-perm-spoofer-tpm-supported-arp-mac-address-supports-all-motherboards.html)**',
                    inline: true
                }
            );
        inter.reply({embeds: [embed], ephemeral: ephemeralStatus});
    }
}