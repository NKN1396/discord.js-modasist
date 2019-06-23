module.exports = function(tracker){
	tracker.client.on("message", message => {
		if(!message.guild) return
		const member = tracker.guilds.fetch(message.guild.id).members.fetch(message.member.id)
		member.messagesIn30s++
		setTimeout(() => {
			member.messagesIn30s--
		}, 30 * 1000)
		if(member.messagesIn30s >= 6) {
			tracker.emit("memberMessageSpam", message.member)
		}
	})
}
