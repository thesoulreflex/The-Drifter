const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
let sicon = message.guild.iconURL;
let serverembed = new discord.RichEmbed()
.setDescription("Server Information")
.setColor("42e2f4")
.setThumbnail(sicon)
.addField("Server Name" , message.guild.name)
.addField("Created On" , message.guild.createdAt)
.addField("You Joined" , message.guild.joinedAt)
.addField("total members", message.guild.memberCount)
.addField("Discriminator", message.author)

return message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"
}