const eventName = "userMessageSpam"
//Values: average 200CPM, fast 275 CPM, very fast 365 CPM
//Good middle ground: 300CPM because you still have to think
//6m40s = 400s for 2k characters is reasonable
let defaultRules = [
	{
		threshold: 2000, //6
		timeframe: 400 * 1000
	}
]

module.exports = async (tracker, message, rules = defaultRules) => {
	let user = message.author
	let spamcheckers = tracker.users.fetch(user.id).spamcheckers.fetch(eventName, [])
	spamcheckers.init(rules)
	if (spamcheckers.check(message.content.size, message.createdAtTimestamp)) {
		tracker.emit(eventName, user)
	}
}
