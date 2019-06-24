const UserStore = require("./ModasistUserStore")

/**
 * Represents a single Discord guild.
 */
module.exports = class ModasistGuildStore extends Map {
	constructor(iterable) {
		super(iterable)
	}

	fetch(key) {
		if (!super.has(key)) {
			let value = {
				members: new UserStore()
			}
			super.set(key, value)
		}
		return super.get(key)
	}
}
