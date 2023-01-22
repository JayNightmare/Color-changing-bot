const Discord = require('discord.js'); // Require discord.js for your bot to communicate with the Discord API
const config = require('./config.json'); // Our config file
const client = new Discord.Client;

let userIDColorcatcher = 0;

function color()
{
    
}
 
client.on('ready', () => 
{ // When bot is online and ready
    console.log(`I'm ready!`);
});

client.on("message", async message => 
{ // When the bot spots a message
    
    if(message.author.bot) return; // Doesn't respond to bots

    if(message.content.indexOf(config.prefix) !== 0) return; // Only responding to existing commands that start with "!"

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // Configure arguments for the commands
    const command = args.shift().toLowerCase(); // Detect existing commands

    //Commands
    if (message.content.startsWith("!hello")) 
    {
        message.channel.send("Hello!");
        console.log("Sending A Hello Message");
    }

    if (message.content.startsWith("!color")) 
    {
        const color = message.content.split(" ")[1];
        const roleName = `Color-${color}`;
        let role = message.guild.roles.cache.find(r => r.name === roleName);
        if (message.content.includes("#"))
        {
            if (!role) 
            {
                role = await message.guild.roles.create( { data: { name: roleName, color: color } });
                message.member.roles.add(role);
                message.channel.send(`Color changed to ${color}`);
                console.log("Changing Color");
                userIDColorcatcher++;
            }
        }
        else if (message.content.includes("!color"))
        {
            message.channel.send("Please include a hex code in the command line");
            console.log("HEX code not working");
        
        }
    }

    else if (message.content.startsWith("!change color"))
    {
        const roleName = guide.roles;
        let role = message.guild.roles.cache.find(r => r.name === roleName);
        if(role)
        {
            
        }
    }
});

client.login(config.token); // Log in with the bot token from our config file