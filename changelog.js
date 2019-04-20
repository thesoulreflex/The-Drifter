const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    await(1000);
    await message.delete();
    let change = new Discord.RichEmbed()
    .setColor(config.purple)
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription(`${bot.user} Changelog, 4/5/19`)
    .addField("Removed a few Ramen Shop commands", "The roles were deleted, so I don't really want the bot to clog my logs with errors")
    .addBlankField(true)
    .addField("Need help? Want to help?", "Join our support Discord and ask us there!: https://discord.gg/FfZzTsz")
    .setFooter("Created by: Arkane", "https://cdn.discordapp.com/avatars/208779984276291585/7fc296a22e464630c2eaa0aff09f3c4f.png")

    message.channel.send(change);
}

module.exports.help = {
    name: "changelog"
}