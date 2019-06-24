const { EventEmitter } = require("events")

class Spamtracker extends EventEmitter { //EventEmitter?
	constructor(threshold, timeframe, eventName, triggerOnce = true) {
		super()
		this.threshold = threshold //2000
		this.timeframe = timeframe //400
		this.eventName = eventName //memberMessageSpam
		this.triggerOnce = triggerOnce
		this.value = 0
		this.decaying = false
		this.decayPerSecond = threshold / timeframe
	}
	add(value) {
		this.value += value
		if (this.decaying) {
			return
		}
		const decayHandler = setInterval(function() {
			this.value -= this.decayPerSecond
			if (this.value <= 0) {
				this.value = 0
				this.decaying = false
				clearInterval(decayHandler)
			}
		}, 1000)
		if (!(this.value > this.threshold)) {
			return false
		}


		super.emit("spam")
		return true
	}
}

module.exports = Spamtracker
