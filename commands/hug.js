const Discord = require("discord.js");

const config = require("../config.json");

let prefix = config.prefix;



module.exports.run = async (bot, message, args) => {

    let hugged = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));



    let gifs = [

        "https://i.imgur.com/9Q5gyFh.png,"

        
       

        

       

    ];

    let gif = gifs[Math.floor(Math.random()*gifs.length)];

    

    if(!hugged){

        let hugembed = new Discord.RichEmbed()

        .setColor(config.purple)

        .setDescription(`${message.author} hugs themsleves`)

        .setImage(gif)

        .setFooter(`Powered by ${bot.user.username}`, bot.user.displayAvatarURL)

        message.channel.send(hugembed);

    } else {

        let hugembed = new Discord.RichEmbed()

        .setColor(config.purple)

        .setDescription(`${message.author} hugs ${hugged}`)

        .setImage(gif)

        .setFooter(`Powered by ${bot.user.username}`, bot.user.displayAvatarURL)



        await(1000);

        message.channel.send(hugembed);

    }

}



module.exports.help = {

    name: "hug"

}