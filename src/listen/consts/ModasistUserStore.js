const DataStore = require("./ModasistDataStore")
const SpamcheckerStore = require("./SpamcheckerStore")

/**
 * Stores Discord users/members.
 */
module.exports = class ModasistUserStore extends DataStore {
	constructor(iterable) {
		super(iterable)
	}
	
	/**
	 * Fetches a single user from a list of users.
	 * @param {String} key ID of the user.
	 * @returns {*} The user.
	 */
	fetch(key) {
		let value = {
			spamcheckers: new SpamcheckerStore()
		}
		return super.fetch(key, value)
	}

}
