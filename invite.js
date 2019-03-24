const Discord = require("discord.js");

const config = require("../config.json");

let prefix = config.prefix;



module.exports.run = async (bot, message, args) => {

    message.reply("DM sent!");

    message.author.send("Click the link to invite me to your server! \nhttps://discordapp.com/api/oauth2/authorize?client_id=557794575876489226&permissions=8&scope=bot")

}



module.exports.help = {

    name: "invite"

}