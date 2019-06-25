const DataStore = require("./ModasistDataStore")
const UserStore = require("./ModasistUserStore")

/**
 * Represents a single Discord guild.
 */
module.exports = class ModasistGuildStore extends DataStore {
	constructor(iterable) {
		super(iterable)
	}

	fetch(key) {
		var buffer = super.fetch(key)
		buffer.members = new UserStore()
		buffer.checkers = new DataStore()
		return super.fetch(
			key,
			{
				members: new UserStore(),
				checkers: new DataStore()
			}
		)
	}
}
