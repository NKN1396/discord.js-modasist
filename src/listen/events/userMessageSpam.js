module.exports = function(tracker) {
	tracker.client.on("message", message => {
		const user = tracker.users.fetch(message.author.id)
		user.messagesIn30s++
		setTimeout(() => {
			user.messagesIn30s--
		}, 30 * 1000)
		if (user.messagesIn30s >= 6) {
			tracker.emit("userMessageSpam", message.author)
		}
	})
}
