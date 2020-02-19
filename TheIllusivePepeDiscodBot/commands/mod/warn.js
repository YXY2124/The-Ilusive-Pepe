const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "warn",
    category: "moderation",
    description: "warns a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember)
            return message.reply("Couldn't find that person?")

        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send(`Sorry ${message.member}, I cant warn Admins`)

        if (!args[1])
            return message.channel.send("Please provide a reason for the report")
        
        const channel = message.guild.channels.find(c => c.name === "pepe-logs")
            
        if (!channel)
            return message.channel.send("Couldn't find a `#logs` channel")

            message.channel.send(`Warned ${rMember}. Look in "**#pepe-logs**"`)

        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Warned member", rMember.user.displayAvatarURL)
            .setDescription(`**Member:** ${rMember}\n\**Warned by:** ${message.member}\n\**Reason:** ${args.slice(1).join(" ")}`)
             
        return channel.send(embed);
    }
}