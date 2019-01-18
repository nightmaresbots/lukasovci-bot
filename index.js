const commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new commando.Client();
var profanities = require('profanities')
const readline = require('readline');



bot.registry.registerGroup('info', 'info');
bot.registry.registerGroup('fun', 'fun');
bot.registry.registerGroup('administrace', 'administrace');
bot.registry.registerGroup('muzika', 'muzika');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname  + "/commands");


bot.on('ready', () => {
    console.log("startuju tu starou rachotinu asi škoda favorit")
    bot.user.setActivity("prefix l!", {type: 1});
});

bot.on('ready', () => {
    console.log('jsem ready jej!');
  });

  for (x = 0; x < profanities; x++) {
    if (message.content.toUpperCase()  == profanities[x].toUpperCase()) {
      message.channel.send('hej! neříkej už to co si řekl/a')
      message.delete();
      return;
    }
  }

  const antispam = require("discord-anti-spam");
 
  antispam(bot, {
    warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
    maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
    interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
    warningMessage: "přestaň spamovat!", // Warning message send to the user indicating they are going to fast.
    banMessage: "cheš ban? jestli ne tak nespamuj!", // Ban message, always tags the banned user in front of it.
    maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
    maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
    deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.
  });
 

  global.currentTeamMembers = [];
  global.servers = {};
  
  bot.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('l!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'je velmi nevychovaný!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`${user.tag} byl uspěšně zabanován`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('nemůžu sám sebe zabanovat!');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('nemáš permise!!!');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('Mušíš použít mention osoby kterou cheš zabanovat!');
      }
    }
  });

  bot.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('l!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Volitelný důvod, který se zobrazí v audio logu').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(` ${user.tag} byl uspěšně kicknut`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Já se nemůžu kicknout');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('Nemáš permise!');
        }
      // Otherwise, if no user was mentioned
      } else {
        message.reply('tento clověk tu není!');
      }
    }
  });
  

bot.on('guildMemberAdd', (member) => {
    const logChannel = member.guild.channels.find(channel => channel.name === 'vítej-a-zbohem');
    var joinrole = member.guild.roles.find('name', 'lidi');
    member.addRole(joinrole)
    if (!logChannel) return undefined;
    logChannel.send(` ----------------------------------
    1> [ ${member.user.tag}] Je tady!
    2> Přečti si #«rules📋» ! 
    3> Užívej
    ----------------------------------`);
});

bot.on('guildMemberRemove', (member) => {
    const logChannel = member.guild.channels.find(channel => channel.name === 'vítej-a-zbohem');
    if (!logChannel) return undefined;
    logChannel.send(`----------------------------------
    1>${member.user.tag} odešel
    ----------------------------------`);
});

bot.on('message', (message)=>{
  if(message.content.startsWith('l!help')){
      message.channel.type === 'dm' ({embed: {
          color: 0x00ff00,
          description: 'posílám ti to do DM'
      }})
  }
});

bot.on('message', function(message){
  if(message.content.startsWith('l!bug')){
  if(message.channel.type === 'dm') {
      console.log("[" + message.author.username + "]: " + message.content)} //Message from : Message
      
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('REPLY TO ' + message.author.username + ': ', (answer) => {
      message.author.send(`${answer}`);
      rl.close();
   });
   }
}); 


bot.login('NDgxMzgzNjg3Njc4NTkxMDAy.DwakbQ.D7SyM9iVDpXZZz_EFut3xZfRCNU');
