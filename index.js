const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();
const fs = require("fs");
let prefix = config.prefix;
bot.commands = new Discord.Collection();



fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js");

  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});



fs.readdir("./commands/fun/", (err, files) => {

  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) => {
    let props = require(`./commands/fun/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});



fs.readdir("./commands/general/", (err, files) => {
  
  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/general/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});



fs.readdir("./commands/moderation/", (err, files) => {
  
  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/moderation/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});



fs.readdir("./commands/nsfw/", (err, files) => {
  
  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/nsfw/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});



fs.readdir("./commands/other/", (err, files) => {

  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/other/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});



bot.on("ready", () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setPresence({ game: { name: `on ${bot.guilds.size} servers! | ${prefix}help` }, status: 'online' });
});



bot.on("message", async message => {
  //a little bit of data parsing/general checks
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(!message.content.startsWith(prefix)) return;
  let content = message.content.split(" ");
  let command = content[0].toLowerCase();
  let args = content.slice(1);


  //checks if message contains a command and runs it
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});



bot.login(process.env.token);