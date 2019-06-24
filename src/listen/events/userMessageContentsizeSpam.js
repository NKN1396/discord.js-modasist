//Values: average 200CPM, fast 275 CPM, very fast 365 CPM
//Good middle ground: 300CPM because you still have to think
//6m40s = 400s for 2k characters is reasonable

module.exports = tracker => {
	tracker.client.on("message", async message => {
		const user = tracker.users.fetch(message.member.id)
		user.messagesIn30s++
		setTimeout(function() {
			user.messagesIn30s--
		}, 400 * 1000)
		if(user.messagesIn30s >= 6) {
			tracker.emit("memberMessageSpam", message.member)
		}
	})
}
