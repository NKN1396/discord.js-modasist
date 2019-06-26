const eventName = "memberMentionUserSpam"
let defaultRules = [
	{
		threshold: 4, //6
		timeframe: 30 * 1000
	}, {
		threshold: 15, //30
		timeframe: 3600 * 1000
	}, {
		threshold: 25, //40
		timeframe: 24 * 3600 * 1000
	}
]

module.exports = async (tracker, message, rules = defaultRules) => {
	let guild = message.guild
	let member = message.member
	if (!guild) {
		return
	}
	let spamcheckers = tracker.guilds.fetch(guild.id).members.fetch(member.id).spamcheckers.fetch(eventName, [])
	spamcheckers.init(rules)
	if (
		spamcheckers.check(
			message.mentions.users.size,
			message.createdAtTimestamp
		)
	) {
		tracker.emit(eventName, member)
	}
}
