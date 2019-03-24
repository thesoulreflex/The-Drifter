const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Can't find user");
        let kReason = args.join(" ").slice(22)
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can not kick this user bitch");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you cannot kick him you pesant");
    
        let kickembed = new discord.RichEmbed()
        .setDescription("~kick~")
        .setColor("#faf0be")
        .addField("kicked User" , `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By" , `<@${message.author.id}>`)
        .addField("kicked In" , message.channel)
        .addField("Time" , message.createdAt)
        .addField("Reason", kReason);
    
        let kickchannel = message.guild.channels.find(`name`, "logs");
        if(!kickchannel) return message.channel.send("Can not find logs bitch.");
    
        message.guild.member(kUser).kick(kReason)
        kickchannel.send(kickembed);

}

module.exports.help = {
    name: "kick"
}