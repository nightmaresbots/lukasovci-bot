const commando = require('discord.js-commando');

class infocommands extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'info',
            memberName: 'info',
            description: 'řekne ti info WOW'
        });
    }

    async run(message, args) {
        var anwser = [
            '1.kdyz nekdo hackne bota nehlaste to me 2.nezebrej 3.ptej se jen kdyz fakt potrebujes 4.nedam ti token', '1.kdyz nekdo hackne bota nehlaste to me 2.nezebrej 3.ptej se jen kdyz fakt potrebujes 4.nedam ti token'
        ];
        var anwser = anwser[Math.floor(Math.random() * 2)];
        message.reply(anwser.toString())
    }
}
module.exports = infocommands;