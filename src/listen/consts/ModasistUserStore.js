const SpamChecker = require("./SpamChecker")

/**
 * Stores Discord users.
 */
module.exports = class ModasistUserStore extends Map {
	constructor(iterable) {
		super(iterable)

		this.checkers = []
	}

	fetch(key) {
		if (!super.has(key)) {
			super.set(key, {})
		}
		return super.get(key)
	}

	addSpamtracker() {
		this.checkers.push(
			new SpamChecker()
		)
	}

}
