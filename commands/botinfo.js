const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    
    let bicon =bot.user.displayAvatarURL;
    

    let botembed = new discord.RichEmbed()
    .setDescription("bot Imformation")
    .setColor("#42e2f4")
    .setThumbnail(bicon)
    .addField("Bot Name" , bot.user.username)
    .addField("Created On" , bot.user.createdAt);
   
    return message.channel.send(botembed);
}



module.exports.help = {
    name: "botinfo"
}