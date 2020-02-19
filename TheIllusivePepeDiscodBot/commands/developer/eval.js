const { RichEmbed } = require("discord.js");
const beautify = require("beautify");

module.exports = {
	name: "eval",
	aliases: ["e"],
    description: "Evaluates the code you put in",
    category: "developer",
	run: async (client, message, args) => {
		if (message.author.id !== "563523368452751403") {
			return message.channel.send(`❌ You do not have permissions to use this command. Please contact the owner.`)
			.then(m => m.delete(5000));
		}

		if (!args[0]) {
			message.channel.send("You need to evaluate _**SOMETHING**_, please?")
			.then(m => m.delete(5000));
		}

		try {
			if (args.join(" ").toLowerCase().includes("token")) {
				return;
			}

			const toEval = args.join(" ");
			const evaluated = eval(toEval);

			let embed = new RichEmbed()
			.setColor("#003EFF")
			.setTimestamp()
			.setFooter(client.user.username, client.user.displayAvatarURL)
			.setTitle("Eval")
			.addField("To Evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
			.addField("Evaluated:", evaluated)
			.addField("Type of:", typeof(evaluated));
			message.channel.send(embed);
		} catch (e) {
			let embed = new RichEmbed()
			.setColor("#FF0000")
			.setTitle("\:x: Error!")
			.setDescription(e)
			.setFooter(client.user.username, client.user.displayAvatarURL)
			message.channel.send(embed);
		}
	}
}