const { RichEmbed } = require("discord.js");

module.exports = {
    name: "ip",
    description: "gets the users ip",
    category: "info",
    run: async (client, message, args) => {
        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
        let replies = ["210.159.13.11", "135.246.58.42", "29.58.121.199", "213.9.66.216", "115.184.212.48", "36.21.154.223", "196.185.61.9", "198.199.73.76", "191.49.195.209", "88.65.181.171", "198.199.73.76", "Error: IP Not Found!"];
        let result = Math.floor((Math.random() * replies.length));
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(replies[result])
        return message.channel.send(embed)
    }
}