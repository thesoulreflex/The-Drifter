const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user");
    let reason = args.join (" ").slice(22);

    let reportembed = new discord.RichEmbed()
    .setDescription("Report")
    .setColor("42e2f4")
    .addField("Reported User" , `${rUser} with ID: ${rUser.id}`)
    .addField("reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel" , message.channel)
    .addField("Time" , message.createdAt)
    .addField("reason" , reason);
    
    
    let reportschannel = message.guild.channels.find(`name` , "logs")
    if(!reportschannel) return message.channel.send("Couldn't find report channel")

   message.delete().catch(O_o=>{});
   reportschannel.send(reportembed);
}

module.exports.help = {
    name: "report"
}
 