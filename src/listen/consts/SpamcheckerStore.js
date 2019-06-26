const SpamcheckerCollection = require("./SpamcheckerCollection")

/**
 * A map extended with a fetch method.
 */
module.exports = class ModasistDataStore extends Map {
	constructor(iterable) {
		super(iterable)
	}

	fetch(key) {
		if (!super.has(key)) {
			super.set(
				key,
				new SpamcheckerCollection()
			)
		}
		return super.get(key)
	}

}
