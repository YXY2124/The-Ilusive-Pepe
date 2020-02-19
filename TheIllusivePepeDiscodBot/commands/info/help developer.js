const { RichEmbed } = require("discord.js");

module.exports = {
    name: "help developer",
    aliases: ["hd"],
    category: "info",
    description: "Returns all developer commands",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle("Developer Commands")
        .setDescription("`shutdown`, `eval`, `reload`")
        .setFooter("use pls before each command!")
        message.channel.send(embed);
    }
}