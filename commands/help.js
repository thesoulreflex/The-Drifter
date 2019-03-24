const Discord = require("discord.js");

const config = require("../config.json");

let prefix = config.prefix;



module.exports.run = async (bot, message, args) => {

    let mainhelp = new Discord.RichEmbed()

    .setDescription(`Every command for ${bot.user}`)

    .setThumbnail(bot.user.displayAvatarURL)

    .setColor(config.purple)

    .addField("Help Subcommands", `\`${prefix}help fun\`, \`${prefix}help general\`, \`${prefix}help mod\`, \`${prefix}help nsfw\`, \`${prefix}help other\``)

    .setFooter("Help Command | Subcommand List", bot.user.displayAvatarURL)



    let funhelp = new Discord.RichEmbed()

    .setDescription(`Fun Commands for ${bot.user}`)

    .setThumbnail(bot.user.displayAvatarURL)

    .setColor(config.purple)


    .addField(`${prefix}hug @user`, "Virtually hug a user! or yourself!")

    .addField(`${prefix}kill @user`, "Virtually kill a user!")

    .addField(`${prefix}Chicken`, "Sends a picture of Cayde and his pet!")

    .addField(`${prefix}stare`, "Stare at a chat!")

    .setFooter("Help Command | List 1/5 | Fun Commands", bot.user.displayAvatarURL)



    let genhelp = new Discord.RichEmbed()

    .setColor(config.purple)

    .setDescription(`General Commands for ${bot.user}`)

    .setThumbnail(bot.user.displayAvatarURL)

    .addField(`${prefix}botinfo`, "View all of the info about me!")

    .addField(`${prefix}changelog`, "View the latest changelog for me! Yay progress!")

    .addField(`${prefix}invite`, "Invite me to your server!")

    .addField(`${prefix}ping`, "Test response time from my servers and the Discord API!")

    .addField(`${prefix}serverinfo`, "Get information about the current server!")

    .addField(`${prefix}support`, "Get a link to the Support Server!")

    .addField(`${prefix}userinfo <@user>`, "Get trackable data from your account! (Optionally, you can ping somebody for their info too!)")

    .setFooter("Help Command | List 2/5 | General Commands", bot.user.displayAvatarURL)



    let modhelp = new Discord.RichEmbed()

    .setColor(config.purple)

    .setThumbnail(bot.user.displayAvatarURL)

    .setDescription(`Moderator Commands for ${bot.user}`)

    .addField(`${prefix}ban @user reason`, "Ban a user from the server with a specified reason!")

    .addField(`${prefix}clear 1-100`, "Clear messages in the current channel!")

    .addField(`${prefix}kick @user reason`, "Kick a user from the server with a specified reason!")

    .addField(`${prefix}say message`, "Tell a bot to say something!")

    .addField(`${prefix}mute @user`, "Stops any sort of chatting from a user including voice chanels!")

    .addField(`${prefix}unmute @user`, "Frees a user from my Sythesis ritual and allows them to speak again!")

    .setFooter("Help Command | List 3/5 | Moderator Commands", bot.user.displayAvatarURL)

 


    if(!args[0]){

        message.channel.send(mainhelp);

        return;

    }



    if(args[0] === "fun"){

        message.channel.send(funhelp);

        return;

    }



    if(args[0] === "general"){

        message.channel.send(genhelp);

        return;

    }



    if(args[0] === "mod"){

        message.channel.send(modhelp);

        return;

    }

    if(args[0]){

        return message.reply(`Invalid Subcommand Name: \`${prefix}help\``);

    }

    

    return;

}



module.exports.help = {

    name: "help"

}