const Discord = require("discord.js");

const config = require("../config.json")

let prefix = config.prefix;



module.exports.run = async (bot, message, args) => {

    let chicken = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));



    let gifs = [

        "https://i.imgur.com/irPPILy.jpg",

    ];

    let gif = gifs[Math.floor(Math.random()*gifs.length)];



    if(!Chicken){

        let chickenEmbed = new Discord.RichEmbed()

        .setColor(config.purple)

        .setDescription(`${message.author} Sends a picture of Cayde and his pet!`)

        .setImage(gif)

        .setFooter(`Powered by ${bot.user.username}`, bot.user.displayAvatarURL)

        message.channel.send(chickenEmbed);

    } else {

        let chickenEmbed = new Discord.RichEmbed()

        .setColor(config.purple)

        .setDescription(`${message.author} chicken ${Here}`)

        .setImage(gif)

        .setFooter(`Powered by ${bot.user.username}`, bot.user.displayAvatarURL)



        await(1000);

        message.channel.send(chickenEmbed);

    }

}



module.exports.help = {

    name: "chicken"

}