const commando = require('discord.js-commando');

class meme extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'meme',
            group: 'fun',
            memberName: 'meme',
            description: 'hádej co to dělá'
        });
    }

    async run(message, args) {
        var anwser = [
            'https://cdn.discordapp.com/attachments/510911982371602448/513826862871609367/unknown.png', 'https://cdn.discordapp.com/attachments/510911982371602448/515274200244682792/unknown.png', 'https://cdn.discordapp.com/attachments/510911982371602448/512002825400745984/The_saga.jpg', 'https://cdn.discordapp.com/attachments/510911982371602448/512003985713135626/New_Einstein.jpg', 'https://cdn.discordapp.com/attachments/510911982371602448/515277250665381895/unknown.png', 'https://cdn.discordapp.com/attachments/510911982371602448/512001391305162752/Future.jpg'
        ];
        var anwser = anwser[Math.floor(Math.random() * 6)];
        message.reply(anwser.toString())
    }
}
module.exports = meme;