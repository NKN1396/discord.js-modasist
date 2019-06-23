/**
 * Stores Discord users.
 */
module.exports = class ModasistUserStore extends Map {
	constructor(iterable){
		super(iterable)
	}

	fetch(key){
		if(!super.has(key)){
			let value = {
				messagesIn30s: 0,
				pingsIn1m: 0
			}
			super.set(key, value)
		}
		return super.get(key)
	}

}
