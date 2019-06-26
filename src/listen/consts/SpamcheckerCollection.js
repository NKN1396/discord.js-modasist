const Spamchecker = require("./Spamchecker")

/**
 * Stores Modasist Spamcheckers.
 */
module.exports = class SpamcheckerCollection extends Array {
	constructor() {
		super()

	}

	add(spamcheckers) {
		spamcheckers.forEach(checker => {
			super.push(
				new Spamchecker(checker.threshold, checker.timeframe)
			)
		})

	}

	init(spamcheckers) {
		if (this.size === undefined) {
			this.add(spamcheckers)
		}
	}

	check(value, timestamp) {
		var triggered = false
		super.forEach(checker => {
			if (checker.check(value, timestamp)) {
				triggered = true
			}
		})
		return triggered
	}

}
