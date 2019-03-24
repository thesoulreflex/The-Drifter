const Discord = require("discord.js");

const config = require("../config.json");

let prefix = config.prefix;



module.exports.run = async (bot, message, args) => {

    await message.delete();

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Insufficient Permissions: `MANAGE_MESSAGES`");

    if(!args[0]) return message.reply(`Incorrect Usage: \`${prefix}say message\``);



    let say = args.join(" ");

    message.channel.send(say);

}



module.exports.help = {

    name: "say"

}