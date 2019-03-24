const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Can't find user");
        let bReason = args.join(" ").slice(22)
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You can not ban this user bitch");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you cannot ban him you pesant");
    
        let banEmbed = new discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#faf0be")
        .addField("Banned User" , `${bUser} with ID ${bUser.id}`)
        .addField("Banned By" , `<@${message.author.id}>`)
        .addField("Banned In" , message.channel)
        .addField("Time" , message.createdAt)
        .addField("Reason", bReason);
    
        let logschannel = message.guild.channels.find(`name`, "logs");
        if(!logschannel) return message.channel.send("Can not find logs bitch.");
    
        message.guild.member(bUser).kick(bReason)
        Logschannel.send(banEmbed);

        

}

module.exports.help = {
    name: "ban"
}