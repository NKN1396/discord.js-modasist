const DataStore = require("./ModasistDataStore")
const UserStore = require("./ModasistUserStore")

/**
 * Represents Discord guilds.
 */
module.exports = class ModasistGuildStore extends DataStore {
	constructor(iterable) {
		super(iterable)
	}

	/**
	 * Fetches a single guild from a list of guilds.
	 * @param {String} key ID of the guild.
	 * @returns {*} The guild.
	 */
	fetch(key) {
		let value = {
			members: new UserStore(),
			spamcheckers: new DataStore()
		}
		return super.fetch(key, value)
	}

}
