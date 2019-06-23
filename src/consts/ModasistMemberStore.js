/**
 * Represents a single Discord member in a guild.
 */
module.exports = class ModasistMemberStore extends Map {
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
