const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "gay",
    aliases: ["affinity"],
    category: "fun",
    description: "shows your gay level",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "".repeat(loveIndex) + "".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .addField(`**:gay_pride_flag:  Gay Rate :gay_pride_flag:**`,
            `I rate you ${Math.floor(love)}% out of 100%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}