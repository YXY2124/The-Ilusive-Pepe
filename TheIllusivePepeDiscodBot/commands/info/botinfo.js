const { RichEmbed } = require("discord.js");

module.exports = {
    name: "botinfo",
    aliases: ["bi"],
    description: "shows bot info",
    category: "info",
    run: async (client, message, args) => {
        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds `
        }
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${client.user.username}`)
        .setDescription("WE LIKE FORTNITE, WE LIKE FORTNITE!")
        .setThumbnail("https://cdn.discordapp.com/avatars/670366800134799371/12ec962f4378af8be0fa2e36d63f8260.png?size=2048")
        .addField("Bot Name", `<:bot:671887329996046370> ${client.user.username}`, true)
        .addField("Bot Library", "<:discordjs:678739742988435457> Discord.js", true)
        .addField('Developer(s)', '𝓨𝓧𝓨#1337', true)
        .addField(`Servers`, `${client.guilds.size}`, true)
        .addField(`Users`, `${client.users.size}`, true)
        .addField('Website', '[Click Me](https://theillusivepepe.glitch.me/)', true)
        .addField("Created On", client.user.createdAt)
        .setFooter(`Bot Uptime: ${duration(client.uptime)}`)
        return message.channel.send(embed);
    }
}
//https://discord.gg/4sVDeWF