var Discord = require("discord.js")
var Modasist = require("discord.js-modasist")
var db = "whatever"

var bot = new Discord.Client()

var alerts = new Modasist.BehaviorTracker(bot, {
	ignoreDms: true,
	database: db
})
var automod = new Modasist.PunishmentHandler(bot)
var 

alerts.on("everyonePing", member => {
	moderator.mute(member)
	moderator.ban(member)
})

Alert.on("memberPingspam", member => {
	member.mute(600000) //10m mute
})
