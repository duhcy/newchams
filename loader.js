const { readdirSync } = require("fs");
const { Collection } = require("discord.js");
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

  client.on("ready", (client) => {
    if (client.config.app.global)
      client.application.commands.set(commandsArray);
    else
      client.guilds.cache
        .get(client.config.app.guild)
        .commands.set(commandsArray);
  });

  async function parseLog(txtEvent) {
    console.log(txtEvent, null);
  }
