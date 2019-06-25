const Spamtracker = require("./../consts/Spamtracker")

class SpamtrackerStore extends Map {
	constructor(iterable) {
		super(iterable)
		
	}
	fetch(key) {
		if (!super.has(key)) {
			let value = new Spamtracker()
			super.set(key, [])
		}
		if (super.has(key)) {
			super.set()
		}

		return super.get(key)
	}

}

module.exports = SpamtrackerStore
