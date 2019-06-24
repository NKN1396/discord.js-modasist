const eventName = "memberMessageSpam"

module.exports = function(tracker) {
	tracker.client.on("message", message => {
		if (!message.guild) {
			return
		}
		const member = tracker.guilds.fetch(message.guild.id).members.fetch(message.member.id)
		//TODO: trackers => listeners
		member.trackers.filter(relevantTracker => {
			return (relevantTracker.eventName === eventName)
		})
			.forEach(relevantTracker => {

			})
		const spamtracker = .fetch(eventName)
		spamtracker.on("spam", ()=>{
			tracker.emit(eventName, message.member)
		})
	})
}
