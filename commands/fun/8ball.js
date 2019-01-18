const commando = require('discord.js-commando');

class eightball extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'fun',
            memberName: '8ball',
            description: 'prostě 8ball'
        });
    }

    async run(message, args) {
        var anwser = [
            'Ano', 'Ne', 'nech mě spát >:(', 'nvm', 'možná', 'možná ano', 'OOF'
        ];
        var anwser = anwser[Math.floor(Math.random() * 7)];
        message.reply("odpověd:" +anwser.toString())
    }
}
module.exports = eightball;