const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "cats",
    category: "fun",
    description: "Sends a cat image",
    run: async (client, message, args) => {
        let msg = await message.channel.send("Generating...")
        const subReddits = ["meow", "cats"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription("**MEOW!! <:575417465975210001:679348338109317120>**")
            .setImage(img)
            .setFooter(`Cat images from /r/cats`)
            .setURL(`https://reddit.com/r/cats`);

            msg.edit(embed);
    }
}