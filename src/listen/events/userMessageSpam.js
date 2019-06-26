const eventName = "userMessageSpam"
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
	let user = message.author
	let spamcheckers = tracker.users.fetch(user.id).spamcheckers.fetch(eventName, [])
	spamcheckers.init(rules)
	if (spamcheckers.check(1, message.createdAtTimestamp)) {
		tracker.emit(eventName, user)
	}
}
