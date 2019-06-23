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

var debugChannel

bot.on("ready", ()=> {
	debugChannel = bot.guilds.get("299298454457548801").channels.get("303350853568299010")
})

alerts.on("memberMessageSpam", member => {
	console.log("memberMessageSpam"),
	debugChannel.send(`${member}`)
})
