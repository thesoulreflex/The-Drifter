const Discord = require("discord.js");

const config = require("../config.json");

let prefix = config.prefix;



module.exports.run = async (bot, message, args) => {

    let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    

    if(!killed){

        let killembed = new Discord.RichEmbed()

        .setColor(config.purple)

        .setDescription(`${message.author} commited suicide`)

        .setImage("https://i.imgur.com/y7gJfUv.png")

        

        message.channel.send(killembed);

    } else {

        let killembed = new Discord.RichEmbed()

        .setColor(config.purple)

        .setDescription(`${message.author} killed ${killed}`)

        .setImage("https://i.imgur.com/y7gJfUv.png")

        



        await(1000);

        message.channel.send(killembed);

    }

}



module.exports.help = {

    name: "kill"

}