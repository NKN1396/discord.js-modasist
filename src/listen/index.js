console.log("modasist?")

const EventEmitter = require("events")
const UserStore = require("./../consts/ModasistUserStore")
const GuildStore = require("../consts/ModasistGuildStore")

class BevahiorTracker extends EventEmitter {
	constructor (options = {}) {
		//Apply options
		super()
		if(options.client) this.client = options.client

		//Attributes
		this.guilds = new GuildStore()
		this.users = new UserStore()

		//Events
		require("./events/userMessageSpam")(this)
		require("./events/memberMentionUserSpam")(this)
		require("./events/memberMessageSpam")(this)

	}
	//Methods

}

module.exports = BevahiorTracker

console.log("MODASIST!")
