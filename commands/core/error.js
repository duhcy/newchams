const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

const errors = {
  'Vega - How to Turn Off HVCI': {
    title: 'Vega - How to Turn Off HVCI',
    description: 'Follow these steps to disable HVCI:',
    color: 9448166,
    fields: [
      {
        name: 'Steps',
        value: '1. Launch CMD as Administrator\n2. Type in these commands one by one:\n```\nbcdedit /set hypervisorlaunchtype off\nreg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity" /v "Enabled" /t REG_DWORD /d 0 /f\nreg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard" /v EnableVirtualizationBasedSecurity /t REG_DWORD /d 0 /f\n```\n3. Restart your PC',
        inline: false
      }
    ],
    image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif'
  },
  'Vega - Menu Not Showing': {
    title: 'Vega - Menu Not Showing',
    description: 'Disable Exploit Protections in Windows 11 Settings.',
    color: 9448166,
    fields: [
      {
        name: 'Solution',
        value: '1. Press Windows Key and search for **Exploit Protection**\n2. Open **Exploit Protection** settings\n3. Disable all protections\n4. Restart your PC\n5. Launch the loader again',
        inline: false
      }
    ],
    image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif'
  },
  'Vega - Fix Crashing / Not Starting of Loader': {
    title: 'Vega - Fix Crashing / Not Starting of Loader',
    description: 'Run these DISM and SFC commands to repair Windows:',
    color: 9448166,
    fields: [
      {
        name: 'Steps',
        value: '1. Open CMD as Administrator\n2. Run these commands in order:\n```\nDism /Online /Cleanup-Image /ScanHealth\nDism /Online /Cleanup-Image /RestoreHealth\nsfc /scannow\n```\n3. Wait for each command to complete\n4. Restart your PC\n5. Try launching the loader',
        inline: false
      },
      {
        name: 'Note',
        value: 'These commands may take 10-30 minutes to complete. Do not close the CMD window.',
        inline: false
      }
    ],
    image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif'
  },
  'Vega - Booting Issues': {
    title: 'Vega - Booting Issues',
    description: 'Set Windows as 1st boot option in BIOS.',
    color: 9448166,
    fields: [
      {
        name: 'Solution',
        value: '1. Restart your PC\n2. Enter BIOS (usually by pressing Del, F2, F10, or F12 during startup)\n3. Navigate to **Boot** settings\n4. Set **Windows Boot Manager** as the **1st boot option**\n5. Save changes and exit BIOS\n6. PC will restart normally',
        inline: false
      }
    ],
    image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif'
  },
  'Vega - Laggy Overlay': {
    title: 'Vega - Laggy Overlay',
    description: 'Fix laggy or stuttering overlay in Rainbow Six Siege:',
    color: 9448166,
    fields: [
      {
        name: 'Solution',
        value: '1. Open **Rainbow Six Siege**\n2. Go to **Settings** > **Graphics**\n3. Set **Render Scale** to **25%**\n4. Enable **VSync**\n5. Set VSync to **1 Frame**\n6. Apply settings and restart the game',
        inline: false
      },
      {
        name: 'Note',
        value: 'These settings reduce GPU load, which can help eliminate overlay lag and stuttering.',
        inline: false
      }
    ],
    image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif'
  },
   'Vega BSOD Fix': {
       title: 'Vega BSOD Fix',
       description: 'Security features that need to be disabled:',
       color: 9448166,
       fields: [
         {
           name: 'Required Changes',
           value: '**Secure Boot** - Disable in BIOS\n**Virtualization based Security (VBS)**\n**RAID** - Disable to avoid any issues if enabled',
           inline: false
         }
       ],
       image: 'https://cdn.discordapp.com/attachments/1139006641442922557/1512179657397764217/image.png?ex=6a23268d&is=6a21d50d&hm=379361006121f64dc3694d42cd52aa0054e117016805bdc945cea511052d320b&animated=true'
     },
  'Vega - Loader Keeps Wanting to Restart PC': {
    title: 'Vega - Loader Keeps Wanting to Restart PC',
    description: 'Usual problems that causes this:',
    color: 9448166,
    fields: [
      {
        name: 'Problem 1: Multiple Windows Installs',
        value: '**Solution:** Physically unplug the other Windows drive',
        inline: false
      },
      {
        name: 'Problem 2: Second Bugged EFI Partition',
        value: '**Solution:** You can either erase the partition (needs IT knowledge) or do a Windows reinstall',
        inline: false
      },
      {
        name: 'Problem 3: Laptop Incompatibility (Rare)',
        value: '**Solution:** Some laptops don\'t like it and in the restart process you will be stuck in a black screen. If you have this issue, you will likely need a refund',
        inline: false
      }
    ],
    image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif'
  },
  'Vega - DLL Cannot Be Loaded': {
    title: 'Vega - DLL Cannot Be Loaded',
    description: 'Install the C++ 2015 x64 Redistributable package.',
    color: 9448166,
    fields: [
      {
        name: 'Solution',
        value: 'In case you get a messagebox saying The DLL "..." cannot be loaded when trying to start the loader:\n\n1. Go to https://www.microsoft.com/en-us/download/details.aspx?id=48145\n2. Press on download\n3. Install the C++ 2015 x64 Redistributable package\n4. Restart your PC\n5. Try launching the loader again',
        inline: false
      }
    ],
    image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif'
  },
    'EAC Forbidden Tool': {
      title: 'EAC Forbidden Tool',
      description: 'Follow these comprehensive fixes:',
      color: 9448166,
      image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
      fields: [
        {
          name: 'First Fix',
          value: '1. Update Windows\n2. Update Nvidia / AMD Graphical Drivers\n3. Restart Computer\n4. Delete All Current Loaders & Install A New One\n5. Run the New Loader as Administrator',
          inline: false
        },
        {
          name: 'Second Fix',
          value: '1. Restart Computer\n2. Delete All Current Loaders\n3. Restart Again\n4. Launch Rust Without Injecting\n5. Connect to desired Server\n6. Play for Approx. 10 Minutes\n7. Disconnect from the Server and Close Rust\n8. Restart Once Again\n9. Install a New Loader Running It as Administrator\n10. Injecting\n11. Reconnected to Desired Server',
          inline: false
        },
        {
          name: 'Also Check',
          value: 'If Nvidia, SteelSeries, or Overwolf are being run as admin:\n• Through user Input when Launching\n• In the Compatibility tab of each Software',
          inline: false
        },
        {
          name: 'If Nothing Works',
          value: 'Keep Restarting Their Computer and Injecting with a new Loader',
          inline: false
        }
      ]
    },
  'Failed to get FNameXorKey': {
    title: 'Failed to get FNameXorKey',
    description: 'This error occurs when Core Isolation/HVCI is disabled. You need to enable it.',
    color: 9448166,
    fields: [
      {
        name: 'Steps',
        value: '1. Press **Windows Key** and type **Core Isolation**\n2. Click on **Core Isolation** settings\n3. Turn **ON Memory Integrity**\n4. Restart your PC',
        inline: false
      },
      {
        name: 'Important',
        value: 'You must restart your PC for changes to take effect. Make sure Core Isolation is ENABLED for this fix.',
        inline: false
      }
    ],
    image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif'
  },
   'Driver Installation Error 1': {
     title: 'Driver Installation Error 1',
     description: 'Follow these steps to resolve driver installation issues:',
     color: 9448166,
     image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
     fields: [
       {
         name: '1. Uninstall Antivirus Software',
         value: 'Check that all antivirus software is uninstalled in Control Panel > Uninstall a Program',
         inline: false
       },
       {
         name: '2. Update Windows & Drivers',
         value: 'Check for Windows & driver updates (often done in NVIDIA app)',
         inline: false
       },
       {
         name: '3. Disable Core Isolation',
         value: 'Turn off all Core Isolation settings (Press Windows Key > Type "Core Isolation")',
         inline: false
       },
       {
         name: '4. Restart PC',
         value: 'Restart PC and inject again',
         inline: false
       },
       {
         name: '5. Remove Faceit/Vanguard',
         value: 'Uninstall Faceit anti-cheat and Riot Vanguard using "Add or Remove Programs"',
         inline: false
       },
       {
         name: '6. Disable Windows Defender',
         value: 'Disable all antivirus software and Windows Defender (Real-Time Protection)',
         inline: false
       },
       {
         name: '7. Disable Kernel Isolation',
         value: 'Disable kernel isolation and vulnerable driver blocking in Windows Defender',
         inline: false
       },
       {
         name: '8. Disable Reputation-Based Protection',
         value: 'Search for it in Windows and disable all options',
         inline: false
       },
       {
         name: '9. Switch Screen Mode',
         value: 'Switch in-game screen mode to "Borderless/Windowed"',
         inline: false
       }
     ]
   },
   'Script Edge Error': {
     title: 'Script Edge Error',
     description: 'Put this script in a `.bat` file and run it as Administrator.',
     color: 9448166,
     image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
     fields: [
       {
         name: 'BAT Script',
         value: '```bat\n@echo off\n\necho Detecting Windows temp path...\n\nset TARGET=%TEMP%\n\necho Temp path is: %TARGET%\n\nfor %%I in (\"%TARGET%\") do set USERPATH=%%~dpI\n\necho Detected profile directory:\necho %USERPATH%\n\necho Taking ownership...\ntakeown /F \"%USERPATH%\" /R /D Y >nul 2>&1\n\necho Granting permissions...\nicacls \"%USERPATH%\" /grant %USERNAME%:(OI)(CI)F /T >nul 2>&1\n\necho.\necho Permissions repaired.\necho Restart your PC\npause\n```',
         inline: false
       }
     ]
   },
   'Spoofer Ban Fix': {
     title: 'Spoofer Ban Fix',
     description: 'Fix for being banned from the spoofer.',
     color: 9448166,
     image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
     fields: [
       {
         name: 'Registry Cleanup',
         value: '1. Delete the `.reg` file (if you have it)\n2. Run `regedit` as Administrator\n3. Navigate to: `HKEY_LOCAL_MACHINE\\SOFTWARE\\sick\\Settings`\n4. Right-click on **sick** → Delete (confirm)',
         inline: false
       },
       {
         name: 'IP Whitelisting',
         value: '1. Visit https://whatismyipaddress.com/\n2. Copy your IP address\n3. Send it here for whitelisting',
         inline: false
       }
     ]
   },
    'HWID Spoofer BSOD': {
      title: 'HWID Spoofer BSOD',
      description: 'Blue screen when running spoofer.',
      color: 9448166,
      image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
      fields: [
        {
          name: 'Solution',
          value: '1. Disable virtualization in BIOS\n2. Make sure you\'re NOT on Windows 25H2\n\nIf you are on 25H2, downgrade to a version below 23H2.',
          inline: false
        }
      ]
    },
   'Failed to load cheat Rust Pulsar': {
     title: 'Failed to load cheat Rust Pulsar',
     description: 'Unable to load the Rust Pulsar cheat.',
     color: 9448166,
     image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
     fields: [
       {
         name: 'Log File',
         value: 'Please send this file for debugging:\n`C:/programdata/squad/log.txt`',
         inline: false
       }
     ]
   },
    'NextCheat - Menu Not Showing Up in EFT': {
     title: 'NextCheat - Menu Not Showing Up in EFT',
     description: 'The menu is not appearing in Escape from Tarkov.',
     color: 9448166,
     image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
     fields: [
       {
         name: 'Solution',
         value: '**Disable Nvidia Smooth Motion**\n\n1. Right-click on your desktop and select **NVIDIA Control Panel**\n2. Navigate to **Manage 3D Settings**\n3. Find **Smooth Motion** or **Max Frame Rate**\n4. Set it to **Off** or **Disabled**\n5. Click **Apply**\n6. Restart the game and try again',
         inline: false
       }
     ]
   },
   'NextCheat - Common Injection Issues': {
     title: 'NextCheat - Common Injection Issues',
     description: 'Common fixes for failing to inject/crashing when injecting/general game crashes:',
     color: 9448166,
     image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
     fields: [
       {
         name: 'General Fixes',
         value: '• Increase injection delay\n• Clear game cache\n• Verify file integrity\n• Disable NVIDIA smooth motion\n• Disable ReShade\n• Disable any 3rd party overlays (Steam, Medal, Discord are fine usually)',
         inline: false
       },
       {
         name: 'EFT Specific',
         value: '• **Automatic RAM cleaner must be disabled**',
         inline: false
       }
     ]
   },
   'NextCheat Failed to Inject': {
     title: 'NextCheat Failed to Inject',
     description: 'Injection failed due to one of the following issues:',
     color: 9448166,
     image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
     fields: [
       {
         name: 'Possible Fixes',
         value: '• Increase injection delay\n• Clear game cache\n• Verify file integrity\n• Double check that RAM cleaner is disabled\n• Disable NVIDIA smooth motion\n• Disable ReShade',
         inline: false
       }
     ]
   },
   'Astral Pin Error Code Fix': {
     title: 'Astral Pin Error Code Fix',
     description: 'Run these commands in PowerShell as Administrator:',
     color: 9448166,
     image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
     fields: [
       {
         name: 'PowerShell Commands',
         value: '```\ntakeown /F "C:\\Windows\\System32\\hvix64.exe"\nicacls "C:\\Windows\\System32\\hvix64.exe" /grant *$(([System.Security.Principal.WindowsIdentity]::GetCurrent()).User.Value):F\ntakeown /F "C:\\Windows\\System32\\hvax64.exe"\nicacls "C:\\Windows\\System32\\hvax64.exe" /grant *$(([System.Security.Principal.WindowsIdentity]::GetCurrent()).User.Value):F\ndel "C:\\Windows\\System32\\hvix64.exe"\ndel "C:\\Windows\\System32\\hvax64.exe"\n```',
         inline: false
       },
       {
         name: 'Additional Steps',
         value: 'If you receive an error about PIN in Windows sign-in options:\n\n1. Manually disable PIN and password in Windows sign-in options\n2. Manually disable Hyper-V\n3. Run the commands above again',
         inline: false
       }
     ]
   },
    'Astral - Hyper-V Error Even Though It Shows Off': {
      title: 'Astral - Hyper-V Error Even Though It Shows Off',
      description: 'VBS is still enabled. Follow these steps to fully disable it.',
      color: 9448166,
      image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
      fields: [
        {
          name: 'Step 1: Disable Memory Integrity',
          value: 'Search for **Core Isolation** in Windows settings and turn off **Memory Integrity**. Restart.',
          inline: false
        },
        {
          name: 'Step 2: Registry - EnableVirtualizationBasedSecurity',
          value: '1. Run `regedit` as Admin\n2. Navigate to: `HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\DeviceGuard`\n3. Set **EnableVirtualizationBasedSecurity** value to **0**',
          inline: false
        },
        {
          name: 'Step 3: Registry - HypervisorEnforcedCodeIntegrity',
          value: 'Navigate to: `HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity`\n\nSet **Enabled** value to **0**',
          inline: false
        },
        {
          name: 'Step 4: Registry - WindowsHello',
          value: 'Navigate to: `HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\WindowsHello`\n\nSet **Enabled** value to **0**',
          inline: false
        },
        {
          name: 'Step 5: Restart & Verify',
          value: 'Restart your PC. Open **System Information** and verify **Virtualization-based security** says **not enabled**.',
          inline: false
        }
      ]
    },
    'Ultimate EAC Forbidden': {
      title: 'Ultimate EAC Forbidden Tool',
      description: 'EAC Forbidden Tool Error - Follow these comprehensive fixes:',
      color: 9448166,
      image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
      fields: [
        {
          name: 'First Fix',
          value: '1. Update Windows\n2. Update Nvidia / AMD Graphical Drivers\n3. Restart Computer\n4. Delete All Current Loaders & Install A New One\n5. Run the New Loader as Administrator',
          inline: false
        },
        {
          name: 'Second Fix',
          value: '1. Restart Computer\n2. Delete All Current Loaders\n3. Restart Again\n4. Launch Rust Without Injecting\n5. Connect to desired Server\n6. Play for Approx. 10 Minutes\n7. Disconnect from the Server and Close Rust\n8. Restart Once Again\n9. Install a New Loader Running It as Administrator\n10. Injecting\n11. Reconnected to Desired Server',
          inline: false
        },
        {
          name: 'Also Check',
          value: 'If Nvidia, SteelSeries, or Overwolf are being run as admin:\n• Through user Input when Launching\n• In the Compatibility tab of each Software',
          inline: false
        },
        {
          name: 'If Nothing Works',
          value: 'Keep Restarting Their Computer and Injecting with a new Loader',
          inline: false
        }
      ]
    },
    'Astral Memory Map': {
      title: 'Astral Memory Map',
      description: 'Error: Failed to allocate memory/to map memory(x) - Please reboot pc and try again.',
      color: 9448166,
      image: 'https://cdn.tickety.top/images/1415459957012299918/autoresponders/dt76c837a9850/embed/image-1.gif',
      fields: [
        {
          name: 'Solution',
          value: 'The driver was installed incorrectly, you need to restart your PC and try again.\n\n**Note:** If you are in an internet cafe and the error repeats, you need to try another PC.',
          inline: false
        },
        {
          name: 'Clean Startup Programs',
          value: 'If restarting didn\'t help, clean the startup programs.',
          inline: false
        },
        {
          name: 'Use Autoruns (Recommended)',
          value: 'If the error still persists, download **Autoruns** and disable all programs that are in startup but do not belong to system ones.\n\n**Important:** There are cases when drivers of deleted programs remain in the system.\n\nDownload: https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns',
          inline: false
        }
      ]
    }
};

module.exports = {
  name: 'error',
  description: 'Get help for a specific error',
  options: [
    {
      name: 'name',
      description: 'Error name',
      type: ApplicationCommandOptionType.String,
      required: true,
      autocomplete: true
    }
  ],

  async execute({ inter, ephemeralStatus }) {
    const errorName = inter.options.getString('name');
    const errorData = errors[errorName];

    if (!errorData) {
      return inter.reply({ content: 'Error not found', ephemeral: true });
    }

    const embed = new EmbedBuilder()
      .setTitle(errorData.title)
      .setDescription(errorData.description)
      .setColor(errorData.color)
      .setFooter({ 
        text: 'ChamsCheats',
        iconURL: 'https://cdn.discordapp.com/avatars/1377755363583201391/f61d35f7eb8e3c93af28bffe5ddd6971.webp?size=1024'
      });

    if (errorData.image) {
      embed.setImage(errorData.image);
    }

    if (errorData.fields) {
      embed.addFields(errorData.fields);
    }

    await inter.reply({
      embeds: [embed],
      ephemeral: ephemeralStatus
    });
  },

  async autocomplete(inter) {
    const focused = inter.options.getFocused();
    const filtered = Object.keys(errors).filter(choice =>
      choice.toLowerCase().includes(focused.toLowerCase())
    );

    await inter.respond(
      filtered.slice(0, 25).map(choice => ({
        name: choice,
        value: choice
      }))
    );
  }
};
