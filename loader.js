const { readdirSync } = require("fs");
const { Collection, REST, Routes } = require("discord.js");
client.commands = new Collection();
const commandsArray = [];

const discordEvents = readdirSync("./events/Discord/").filter((file) =>
  file.endsWith(".js")
);

  for (const file of discordEvents) {
    const DiscordEvent = require(`./events/Discord/${file}`);
    const txtEvent = `< -> > [Loaded Discord Event] <${file.split(".")[0]}>`;
    parseLog(txtEvent);
    client.on(file.split(".")[0], DiscordEvent.bind(null, client));
    delete require.cache[require.resolve(`./events/Discord/${file}`)];
  }

  readdirSync("./commands/").forEach((dirs) => {
    const commands = readdirSync(`./commands/${dirs}`).filter((files) =>
      files.endsWith(".js")
    );

    for (const file of commands) {
      const command = require(`./commands/${dirs}/${file}`);
      if (command.name && command.description) {
        commandsArray.push(command);
        const txtEvent = `< -> > [Loaded Command] <${command.name.toLowerCase()}>`;
        parseLog(txtEvent);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
      } else {
        const txtEvent = `< -> > [Failed Command] <${command.name.toLowerCase()}>`;
        parseLog(txtEvent);}
    }
  });

  client.on("ready", async (client) => {
  const guild = client.guilds.cache.get(client.config.opt.GUILDID);
  const guild2 = client.guilds.cache.get(client.config.opt.GUILDID2);
  if (!guild) return console.log("Guild not found.");

  await guild.commands.set(commandsArray); // Fast update for testing
  await guild2.commands.set(commandsArray); 
  console.log("Guild slash commands registered.");

    //console.log(commandsArray);
  });

  async function parseLog(txtEvent) {
    console.log(txtEvent, null);
  }
