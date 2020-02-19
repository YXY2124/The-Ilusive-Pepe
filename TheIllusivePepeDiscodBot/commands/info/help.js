const { RichEmbed } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        if (args[0] === "developer") {
            const embed = new RichEmbed()
                .setColor("RANDOM")
                .setTitle("💻 Developer Commands")
                .setDescription("`shutdown`, `eval`, `reload`")
                .setFooter("use pls before each command!")
                message.channel.send(embed)
            } else {
                if (args[0] === "fun") {
                    const embed = new RichEmbed()
                        .setColor("RANDOM")
                        .setTitle("😄 Fun Commands")
                        .setDescription("`8ball`, `instagram`, `love`, `sexy`, `gay`, `ip`, `fortnite`, `rps`, `avatar`")
                        .setFooter("use pls before each command!")
                        message.channel.send(embed)
            } else {
                if (args[0] === "nsfw") {
                    const embed = new RichEmbed()
                        .setColor("RANDOM")
                        .setTitle("😏 NSFW Commands")
                        .setDescription("`boobs`")
                        .setFooter("use pls before each command!")
                        message.channel.send(embed)
            } else {
                 if (args[0] === "moderation") {
                    const embed = new RichEmbed()
                        .setColor("RANDOM")
                        .setTitle("🔨 Moderation Commands")
                        .setDescription("`kick`, `ban`, `warn`, `mute`, `unmute`")
                        .setFooter("use pls before each command!")
                        message.channel.send(embed)
                            } else {
                                if (args[0] === "guild") {
                                    const embed = new RichEmbed()
                                        .setColor("RANDOM")
                                        .setTitle("⚙️ Guild Commands")
                                        .setDescription("`serverinfo`, `whois`, `botinfo`")
                                        .setFooter("use pls before each command!")
                                        message.channel.send(embed)
                                    } else {
                                        if (args[0] === "text") {
                                            const embed = new RichEmbed()
                                                .setColor("RANDOM")
                                                .setTitle("🔤 Text Commands")
                                                .setDescription("`say`, `say embed`")
                                                .setFooter("use pls before each command!")
                                                message.channel.send(embed)
                                            } else {
                                                if (args[0] === "animals") {
                                                    const embed = new RichEmbed()
                                                        .setColor("RANDOM")
                                                        .setTitle("🐶 Animals Commands")
                                                        .setDescription("`cats`, `dogs`, `seals`")
                                                        .setFooter("use pls before each command!")
                                                        message.channel.send(embed)
                                                    } else {
                                                        if (args[0] === "meme") {
                                                            const embed = new RichEmbed()
                                                                .setColor("RANDOM")
                                                                .setTitle("😂 Meme Commands")
                                                                .setDescription("`meme`, `madlad`, `fails`")
                                                                .setFooter("use pls before each command!")
                                                                message.channel.send(embed)
                                                            } else {
                                                                if (args[0] === "music") {
                                                                    const embed = new RichEmbed()
                                                                        .setColor("RANDOM")
                                                                        .setTitle("🎶 Music Commands")
                                                                        .setDescription("`Getting Developed`")
                                                                        .setFooter("use pls before each command!")
                                                                        message.channel.send(embed)
         } else {
            const embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(`${client.user.username} Command List`)
            .addField('💻 Developer', '`pls help developer`', true)
            .addField('😏 NSFW', '`pls help nsfw`', true)
            .addField('😄 Fun', '`pls help fun`', true)
            .addField('🔨 Moderation', '`pls help moderation`', true)
            .addField('⚙️ Guild', '`pls help guild`', true)
            .addField('🔤 Text', '`pls help text`', true)
            .addField('🐶 Animals', '`pls help animals`', true)
            .addField('😂 Memes', '`pls help meme`', true) 
            .addField('🎶 Music', '`pls help music`', true)
        message.channel.send(embed)
        }
    }
}
}
}
}
}
}
}
}
}