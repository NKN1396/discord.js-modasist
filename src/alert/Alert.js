const EventEmitter = require("events")

class Alert extends EventEmitter {
	constructor (options = {}) {
		
		if(options.client) {
			

		}

	}

}

module.exports = Alert

/*
bot.on("guildPing", member => {
	member.sentPings += 1
	setTimeout(() => {
		member.sentPings -= 1
	}, 30000)
	if(member.sentPings > 5){
		Alert.emit("memberPingspam", member)
	}
	
})

*/
