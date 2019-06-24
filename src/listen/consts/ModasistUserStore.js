const Spamtracker = require("./Spamtracker")

/**
 * Stores Discord users.
 */
module.exports = class ModasistUserStore extends Map {
	constructor(iterable) {
		super(iterable)

		this.trackers = []
	}

	fetch(key) {
		if (!super.has(key)) {
			super.set(key, {})
		}
		return super.get(key)
	}

	addSpamtracker() {
		this.trackers.push(
			new Spamtracker()
		)
	}

}
