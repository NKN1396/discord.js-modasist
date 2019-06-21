bot.on("guildPing", member => {
	member.sentPings += 1
	setTimeout(() => {
		member.sentPings -= 1
	}, 30000)
	if(member.sentPings > 5){
		Alert.emit("memberPingspam", member)
	}
	
})
