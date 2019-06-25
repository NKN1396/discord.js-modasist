const DataStore = require("./ModasistDataStore")
const SpamChecker = require("./Spamchecker")

/**
 * Stores Discord users.
 */
module.exports = class CheckerStore extends DataStore {
	constructor(iterable) {
		super(iterable)

	}

	addSpamtracker() {
		this.checkers.push(
			new SpamChecker()
		)
	}

}
