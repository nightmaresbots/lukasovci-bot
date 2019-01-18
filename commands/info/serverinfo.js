const { Command } = require('discord.js-commando');
const moment = require('moment');
const { stripIndents } = require('common-tags');

const humanLevels = {
	0: 'None',
	1: 'Low',
	2: 'Medium',
	3: '(╯°□°）╯︵ ┻━┻',
	4: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

module.exports = class ServerInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'server-info',
			aliases: ['server'],
			group: 'info',
			memberName: 'server',
			description: 'info o serveru',
			details: `Get detailed information on the server.`,
			guildOnly: true,
			throttling: {
				usages: 2,
				duration: 3
			}
		});
	}

	run(msg) {
		return msg.embed({
			color: 3447003,
			description: `info z **${msg.guild.name}** (ID: ${msg.guild.id})`,
			fields: [
				{
					name: '❯ kanály',
					/* eslint-disable max-len */
					value: stripIndents`
						• ${msg.guild.channels.filter(ch => ch.type === 'text').size} Text, ${msg.guild.channels.filter(ch => ch.type === 'voice').size} Voice
						• normální ${msg.guild.defaultChannel}
						• AFK: ${msg.guild.afkChannelID ? `<#${msg.guild.afkChannelID}> after ${msg.guild.afkTimeout / 60}min` : 'None.'}
					`,
					/* eslint-enable max-len */
					inline: true
				},
				{
					name: '❯ lidé',
					value: stripIndents`
						• ${msg.guild.memberCount} lidé
						• owner ${msg.guild.owner.user.tag}
						(ID: ${msg.guild.ownerID})
					`,
					inline: true
				},
				{
					name: '❯ ostatní',
					value: stripIndents`
						• Role: ${msg.guild.roles.size}
						• Region: ${msg.guild.region}
						• vytvořeno v: ${moment.utc(msg.guild.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss ZZ')}
						• Verifikační level: ${humanLevels[msg.guild.verificationLevel]}
					`
				}
			],
			thumbnail: { url: msg.guild.iconURL }
		});
	}
};
