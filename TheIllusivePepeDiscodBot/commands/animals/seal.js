const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "seals",
    category: "fun",
    description: "Sends a seal image",
    run: async (client, message, args) => {
        let msg = await message.channel.send("Generating...")
        const subReddits = ["seals", "seal"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription("**Ar Ar! (ᵔᴥᵔ)**")
            .setImage(img)
            .setFooter(`Seal images from /r/seals`)
            .setURL(`https://reddit.com/r/seals`);

            msg.edit(embed);
    }
}