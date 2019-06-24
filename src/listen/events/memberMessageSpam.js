const eventName = "memberMessageSpam"

module.exports = function(tracker) {
	tracker.client.on("message", message => {
		if (!message.guild) {
			return
		}
		const member = tracker.guilds.fetch(message.guild.id).members.fetch(message.member.id)
		member.checkers.filter(checker => {
			return (checker.eventName === eventName)
		})
			.forEach(checker => {
				let alert = checker.check(1, message.created)
				if (alert) {
					tracker.emit(eventName, message.member)
				}
			})

	})
}
