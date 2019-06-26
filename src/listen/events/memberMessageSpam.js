const eventName = "memberMessageSpam"
let defaultRules = [
	{
		threshold: 4, //6
		timeframe: 30 * 1000
	}, {
		threshold: 15, //25
		timeframe: 10 * 60 * 1000
	}, {
		threshold: 40, //60
		timeframe: 3600 * 1000
	}, {
		threshold: 200, //250
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
	if (spamcheckers.check(1, message.createdAtTimestamp)) {
		tracker.emit(eventName, member)
	}
}
