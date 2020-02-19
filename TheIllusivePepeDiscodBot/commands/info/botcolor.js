const { RichEmbed } = require("discord.js");

module.exports = {
    name: "botcolor",
    description: "shows bot color",
    category: "info",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription("Color is set to `RANDOM`")
        return message.channel.send(embed)
    }
}