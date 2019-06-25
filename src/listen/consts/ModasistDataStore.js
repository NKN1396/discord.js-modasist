/**
 * A map extended with a fetch method.
 */
module.exports = class ModasistDataStore extends Map {
	constructor(iterable) {
		super(iterable)
	}

	fetch(key, value = {}) {
		if (!super.has(key)) {
			super.set(key, value)
		}
		return super.get(key)
	}

}
