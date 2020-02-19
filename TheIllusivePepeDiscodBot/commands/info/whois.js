const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "whois",
    aliases: ["who", "user", "info"],
    category: "info",
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        let status = {
            online: "<a:online:678282946297200652> - Online",
            idle: "<a:idle:678282946569830400> - Idle",
            dnd: "<a:dnd:678282946242674711> - Do Not Disturb",
            offline: "<a:offline:678282946519760917> - Offline",
            streaming: "<a:streaming:678282946431680563> - Streaming"
        }

    
        const member = getMember(message, args.join(" "));
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';
        const created = formatDate(member.user.createdAt);
        const embed = new RichEmbed()
            
            .setThumbnail(member.user.displayAvatarURL)
            .setColor('RANDOM')
            .setTitle(`${member.user.tag}`)
            .addField("Status:", status[member.user.presence.status], true)
            .addField('Bot:', `${member.user.bot}`)
            .addField('Created at:', `${created}`)
            .addField('Joined server at:', `${joined}`)
            .addField('ID:', `${member.user.id}`)
            .addField('Roles:', `${roles}`)
        if (member.user.presence.game) 
            embed.addField('Currently playing:', stripIndents` ${member.user.presence.game.name}`);
        message.channel.send(embed);
    }
}