class SpamChecker extends Object {
	constructor(threshold, timeframe, eventName, triggerOnce = true) {
		super()
		this.threshold = threshold //2000
		this.timeframe = timeframe //400
		this.eventName = eventName //memberMessageSpam
		this.triggerOnce = triggerOnce
		this.points = 0
		this.decayRate = threshold / timeframe
		this.lastChecked = Date.now()
	}
	check(value, timestamp = Date.now()) {
		//Subtract points lost since last check
		this.points -= (timestamp - this.lastChecked) * this.decayRate
		if (this.points < 0) {
			this.points = 0
		}
		this.lastChecked = timestamp
		//Add new points
		this.points += value
		//Check if Spamtracker should trigger
		if (this.points > this.threshold) {
			return true
		}
		return false
	}
}

module.exports = SpamChecker
