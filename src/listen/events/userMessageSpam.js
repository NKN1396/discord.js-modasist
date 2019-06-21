module.exports = function(tracker){
	tracker.client.on("message", message => {
		if(!tracker.users.has(message.author.id)) tracker.users.set(message.author.id, {})
		console.log(`tracker.users.get(message.author.id).messagesIn30s = ${tracker.users.get(message.author.id).messagesIn30s}`)
		var messagesIn30s = tracker.users.get(message.author.id).messagesIn30s
		messagesIn30s++
		console.log(`messagesIn30s = ${messagesIn30s}`)
		console.log(`tracker.users.get(message.author.id).messagesIn30s = ${tracker.users.get(message.author.id).messagesIn30s}`)

		setTimeout(() => {
			messagesIn30s--
		}, 30000)
		if(messagesIn30s > 8) {
			tracker.emit("userMessageSpam", message.author)
		}
	})
}
