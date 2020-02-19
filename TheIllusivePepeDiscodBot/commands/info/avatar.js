const { RichEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Returns users avatar",
    category: "info",
    run: async (client, message, args) => {
    	const user = message.mentions.users.first() || message.author;
    	const avatarEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setAuthor(user.username)
        .setImage(user.avatarURL)
   		 message.channel.send(avatarEmbed);
		}
    }