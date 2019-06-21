//External dependencies
const Discord = require("discord.js")
const Modasist = require("./src/index")

//Other external stuff
const token = require("./token.json")

//Start
const bot = new Discord.Client()
const alerts = new Modasist.BehaviorTracker({
	client: bot
})

bot.login(token)
	.catch(console.error)

bot.on("ready", () => {
	console.log("Login successful")
	console.log(`Logged in as ${bot.user.tag}`)
})

alerts.on("userMessageSpam", (test) => {
	console.log("userMessageSpam")
	console.log(test)
})
