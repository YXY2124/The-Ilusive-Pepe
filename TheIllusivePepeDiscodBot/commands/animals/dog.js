const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "dogs",
    category: "fun",
    description: "Sends a dog image",
    run: async (client, message, args) => {
        let msg = await message.channel.send("Generating...")
        const subReddits = ["woof", "dogs"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription("**WOOF WOOF!! <:637559999412961281:679354282356768817>**")
            .setImage(img)
            .setFooter(`Dog images from /r/dogs`)
            .setURL(`https://reddit.com/r/dogs`);

            msg.edit(embed);
    }
}