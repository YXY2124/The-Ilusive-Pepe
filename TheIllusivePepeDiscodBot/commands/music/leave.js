module.exports = {
	name: "leave",
	aliases: ["l"],
    description: "makes the bot leave the channel",
    category: "music",
	run: async (client, message, args) => {
        const { voiceChannel } = message.member;
        const players = client.music.players.get(message.guild.id);

        if(voiceChannel && voiceChannel.id !== players.voiceChannel.id) return message.reply("You must be in a vc with the bot to make it leave.");
        if(!players) return message.channel.send("No song(s) currently playing in this guild.");

        client.music.players.destroy(message.guild.id);
        return message.channel.send("Successfully stopped the music!");
    }
}