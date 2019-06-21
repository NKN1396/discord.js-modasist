console.log("modasist?")


const EventEmitter = require("events")
const GuildStore = require("./consts/ModasistGuildStore")
const UserStore = require("./consts/ModasistUserStore")

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

	}
	//Methods

}

module.exports = BevahiorTracker

console.log("MODASIST!")
