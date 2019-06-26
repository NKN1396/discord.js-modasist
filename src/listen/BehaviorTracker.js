const EventEmitter = require("events")
const UserStore = require("./consts/ModasistUserStore")
const GuildStore = require("./consts/ModasistGuildStore")

class BevahiorTracker extends EventEmitter {
	constructor (options = {}) {
		//Apply options
		super()

		if (options.client) {
			this.client = options.client
		} else {
			new Error("Modasist: No client provided!")
		}
		
		/*
		//TODO: rule overrides
		if(options.ruleOverrides){
			ruleOverrides.array.forEach(element => {
				
			})
		}
		*/

		//Attributes
		this.guilds = new GuildStore()
		this.users = new UserStore()

		//Events
		this.client.on("message", message => {
			require("./events/memberMessageSpam")(this, message)
			require("./events/memberMentionUserSpam")(this, message)
			require("./events/userMessageContentsizeSpam")(this, message)
			require("./events/userMessageSpam")(this, message)
			
		})
		

	}
	//Methods

}

module.exports = BevahiorTracker
