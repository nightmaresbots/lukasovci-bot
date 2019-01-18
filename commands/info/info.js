const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'botinfo',
            group: 'info',
            memberName: 'botinfo',
            description: 'řekne ti info ohledne bota'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 666666666666666666666) + 1;
        message.reply("info : libary : discord.js.commando a načetlo se tolik souboru: " + roll) ;
    }
}

module.exports = DiceRollCommand;
