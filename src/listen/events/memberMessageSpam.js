const Spamchecker = require("./../consts/Spamchecker")

const eventName = "memberMessageSpam"
let rules = [
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

module.exports = function (tracker, ruleOverrides = rules) {
	tracker.client.on("message", message => {
		let guild = message.guild
		let member = message.member
		if (!guild) {
			return
		}
		let checkers = tracker.guilds.fetch(guild.id).members.fetch(member.id).checkers.fetch(eventName)
		if (checkers.size === 0) {
			//checkers.add
			ruleOverrides.forEach(ruleOverride => {
				checkers.push(new Spamchecker(ruleOverride.threshold, ruleOverride.timeframe))
			})
			checkers = ruleOverrides
		}
		checkers.forEach(checker => {
			if (checker.check(1, message.createdAtTimestamp)) {
				tracker.emit(eventName, member)
			}
		})

	})
}
