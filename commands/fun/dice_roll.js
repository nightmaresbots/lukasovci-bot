const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'známka',
            group: 'fun',
            memberName: 'známka',
            description: 'řekne ti to známku z matiky'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("MÁŠ ZA  " + roll);
    }
}

module.exports = DiceRollCommand;
