const { RichEmbed } = require("discord.js")
const randomPuppy = require("random-puppy")
const { stripIndents } = require("common-tags");

module.exports = {
    name: "fails",
    category: "fun",
    description: "Sends an epic fail meme",
    run: async (client, message, args) => {

        let msg = await message.channel.send("Generating...")
        const subReddits = ["fails", "oof"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription("**TAKE DA FAILS!! <a:615779110035390464:679352999935475732>**")
            .addField(`Info:`, stripIndents`
            **Cant see the image?** [Click here for the subreddit!](https://reddit.com/r/${random})`);
            embed.setImage(img)
            embed.setFooter(`Memes from /r/${random}`)
            embed.setURL(`https://reddit.com/r/${random}`);

            msg.edit(embed);
    }
}