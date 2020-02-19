const { RichEmbed } = require("discord.js");


module.exports = {
	name: "shutdown",
	description: "powers off the bot",
	category: "developer",
	run: async (client, message, args) => {
        if (message.author.id !== '563523368452751403') return message.channel.send(`❌ You do not have permissions to use this command. Please contact the owner.`);
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(args.join(" "));
        message.channel.send(embed).then(() => {
            process.exit(1);
        });
    }
}