const { RichEmbed } = require("discord.js")
const randomPuppy = require("random-puppy")
const { stripIndents } = require("common-tags");

module.exports = {
    name: "madlad",
    category: "fun",
    description: "Sends an epic mad lad meme",
    run: async (client, message, args) => {

        let msg = await message.channel.send("Generating...")
        const subReddits = ["madlad", "madlads"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription("**Oooo Eeeeee... Mad Lads... My fav! <:pepelovesad:678995082229317632>**")
            .addField(`Info:`, stripIndents`
            **Cant see the image?** [Click here for the subreddit!](https://reddit.com/r/madlads)`);
            embed.setImage(img)
            embed.setFooter(`Memes from /r/madlads`)
            embed.setURL(`https://reddit.com/r/madlads`);

            msg.edit(embed);
    }
}