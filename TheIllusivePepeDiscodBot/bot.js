const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const chalk = require("chalk");
const fs = require("fs");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(chalk.green(`Logged in as: ${client.user.username} || Servers: ${client.guilds.size} || Protecting ${client.users.size} people!`));
    client.user.setActivity(`pls help`, {type: "PLAYING"});
});

client.on("guildMemberAdd", async member => {
    console.log(`${member.id} joined the server`);
    let welcomechannel = member.guild.channels.find(`name`, "welcome-leave");
    welcomechannel.send(`Welcome ${member}!!`);
});

client.on("guildMemberRemove", async member => {
    console.log(`${member.id} left the server`);
    let welcomechannel = member.guild.channels.find(`name`, "welcome-leave");
    welcomechannel.send(`${member} has left...`);
});

client.on("message", async message => {
    const prefix = "pls";
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command)
        command.run(client, message, args);
});

client.login(process.env.TOKEN);