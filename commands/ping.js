const Discord = require("discord.js");

const config = require("../config.json");

let prefix = config.prefix;



module.exports.run = async (bot, message, args) => {

    

    const m = await message.channel.send("Ping?");

    m.edit(`🏓 \n Latency is ${m.createdTimestamp - message.createdTimestamp}ms \n API Latency is ${Math.round(bot.ping)}ms`);



}



module.exports.help = {

    name: "ping"

}