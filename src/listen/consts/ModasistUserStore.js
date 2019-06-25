const DataStore = require("./ModasistDataStore")

/**
 * Stores Discord users.
 */
module.exports = class ModasistUserStore extends DataStore {
	constructor(iterable) {
		super(iterable)
	}

	fetch(key) {
		return super.fetch(
			key,
			new DataStore()
		)
	}

}
