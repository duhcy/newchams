const { REST, Routes, ApplicationCommandOptionType, ApplicationCommandOptionBase, ApplicationCommandType } = require('discord.js');
require('dotenv').config();
const commands = [
  {
    name: 'embeddma',
    description: 'test',
  },
  
];

const rest = new REST({ version: '10' }).setToken(process.env.KEY);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(Routes.applicationCommands(process.env.BOTID), {body: commands}); //Bot ID

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
