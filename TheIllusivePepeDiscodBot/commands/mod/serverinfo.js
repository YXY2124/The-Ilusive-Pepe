const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "serverinfo",
    description: "displays the server info",
    aliases: ["sinf"],
    category: "mod",

    run: async (client, message, args) => {
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(message.guild.name)
        .addField(`Stats`, stripIndents`**Members:** ${message.guild.members.size} (${message.guild.members.filter(member => member.user.bot).size} Bots)
        **Emotes:** ${message.guild.emojis.size}
        **Roles:** ${message.guild.roles.size}
        **Creation:** ${message.channel.guild.createdAt.toUTCString().substr(0, 16)}
        `, true)
        .addField(`Safety`, stripIndents`**Verification:** ${message.guild.verificationLevel}
        **Content Filter: ** ${message.guild.explicitContentFilter}
        `, true)
        .addField(`Stuff`, stripIndents`**Owner:** ${message.guild.owner} (${message.guild.owner.user.username}#${message.guild.owner.user.discriminator})
        **Region:** ${message.guild.region}
        [Icon URL](https://cdn.discordapp.com/icons/670821484356173825/e038039b0b41c0ef7fb40cfe56f42e85.jpg?size=512)
        `, true);
        embed.setFooter(`ID: ${message.guild.id}`)
        return message.channel.send(embed)
    }
}