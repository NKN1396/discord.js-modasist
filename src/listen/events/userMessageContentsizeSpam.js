//Values: average 200CPM, fast 275 CPM, very fast 365 CPM
//Good middle ground: 300CPM because you still have to think

module.exports = function(tracker){
	tracker.client.on("message", message => {
		const user = tracker.users.fetch(message.member.id)
		user.messagesIn30s++
		setTimeout(() => {
			user.messagesIn30s--
		}, 30 * 1000)
		if(user.messagesIn30s >= 6) {
			tracker.emit("memberMessageSpam", message.member)
		}
	})
}
