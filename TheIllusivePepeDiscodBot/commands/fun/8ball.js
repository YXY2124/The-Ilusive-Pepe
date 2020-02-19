const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "8ball",
    aliases: ["8ball"],
    category: "fun",
    description: "answers an 8ball question!",
    run: async (client, message, args) => {
    	if(!args[2]) return message.channel.send("Please ask a full question.");
    	let replies = ["Yes.", "No.", "Ask again later.", "I don't know."];
    	let result = Math.floor((Math.random() * replies.length));
    	let question = args.slice(1).join(" ");

    	let embed = new RichEmbed()
    	.setAuthor(message.author.tag)
    	.setColor("RANDOM")
    	.addField("Question?", question)
    	.addField("Answer.", replies[result])
    	return message.channel.send(embed);
    }
}