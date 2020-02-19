const { RichEmbed } = require("discord.js")
const { stripIndents } = require("common-tags");

module.exports = {
    name: "unmute",
    category: "mod",
    description: "unmutes the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
// check if the command caller has permission to use the command
if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")

//define the reason and unmutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please supply a user to be muted!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

//define mute role and if the mute role doesnt exist then send a message
let muterole = message.guild.roles.find(r => r.name === "Muted")
if(!muterole) return message.channel.send("There is no mute role to remove!")

//remove role to the mentioned user and also send the user a dm explaing where and why they were unmuted
mutee.removeRole(muterole.id).then(() => {
    mutee.send(`**Hello, you have been unmuted in:** ${message.guild.name}\n\--------------------------------------------------------------------\n\**Reason:** ${reason}\n\--------------------------------------------------------------------\n\**By:** ${message.member}`)
    message.channel.send(`I have successfully unmuted **${mutee.user.username}**!`)
})

//send an embed to the modlogs channel
let embed = new RichEmbed()
.setColor("RANDOM")
.setThumbnail(mutee.user.displayAvatarURL)
.setAuthor(`${message.guild.name}`, message.guild.iconURL)
.setDescription(`**Role taken away:** Muted\n\**Mutee:** ${mutee.user.username}\n\**Moderator:** ${message.member}\n\**Reason:** ${reason}\n\**Date:** ${message.createdAt.toLocaleString()}`)
let sChannel = message.guild.channels.find(c => c.name === "pepe-logs")
sChannel.send(embed)

    }
}