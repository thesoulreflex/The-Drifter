const config = require("./config.json");
const discord = require("discord.js");
const fs = require("fs");
const bot = new discord.Client()
const token = process.env.token;
let prefix = config.prefix;
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files)=> {

    if(err) console.log(err);
    
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <=0){

        console.log("Couldn't find commands!");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);


    });
})



bot.on("ready", async () =>{
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
 bot.user.setPresence({ game: { name: "against Shin Malpur" , type: "PLAYING" }, status: "online" });
});

 

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
   
    
})

    
bot.login(token);