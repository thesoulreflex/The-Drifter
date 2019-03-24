const Discord = require("discord.js");

const config = require("../config.json");

let prefix = config.prefix;



module.exports.run = async (bot, message, args) => {

    

    let gifs = [

        "https://i.imgur.com/YZwe7Ek.jpg"
        
       

        

       

    ];

    let gif = gifs[Math.floor(Math.random()*gifs.length)];

    

    let stare = new Discord.RichEmbed()

    .setColor(config.purple)

    .setDescription(`${message.author} stares`)

    .setImage(gif)

    .setFooter(`Powered by ${bot.user.username}`, bot.user.displayAvatarURL)



    await(1000);

    message.channel.send(stare);

}



module.exports.help = {

    name: "stare"

}