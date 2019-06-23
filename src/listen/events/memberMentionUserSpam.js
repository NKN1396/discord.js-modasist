module.exports = function(tracker){
	tracker.client.on("message", message => {
		if(!message.guild) return
		const member = tracker.guilds.fetch(message.guild.id).members.fetch(message.member.id)
		const mentionsInMessage = message.mentions.users.size
		member.pingsIn1m += mentionsInMessage
		setTimeout(() => {
			member.pingsIn1m -= mentionsInMessage
		}, 60 * 1000)
		if(member.pingsIn1m >= 6) {
			tracker.emit("memberMentionUserSpam", message.member)
		}
	})
}
