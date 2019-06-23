const MemberStore = require("./ModasistMemberStore")

/**
 * Represents a single Discord guild.
 */
module.exports = class ModasistGuildStore extends Map {
	constructor(iterable){
		super(iterable)
	}

	fetch(key){
		if(!super.has(key)){
			let value = {
				members: new MemberStore()
			}
			super.set(key, value)
		}
		return super.get(key)
	}
}
