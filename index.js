//External dependencies
const Discord = require("discord.js");
const moment = require("moment");

//Start
const bot = new Discord.Client({
	commandPrefix : "/",
	unknownCommandResponse : false,
	owner : "153595272465743872",
	messageCacheMaxSize	: 2000
});

console.log("nova-logs");
console.log(moment(Date.now()).utcOffset(1).format("LLLL"));

bot.login(require("./token.json").kanna)
	.then(function(){
		console.log("Login successful");
		console.log("Logged in as " + bot.user.tag);
		bot.users.get("153595272465743872").send(
			"✅ nova-logs has been started",
			{
				"embed": {
					"color": 3066993, //Green
					"fields": [
						{
							"name": "Date",
							"value": moment.utc().format(),
							"inline": true
						}
					]
				}
			}
		);
	});
//*/

var antispam = require("./modules/modasist");
var spamtracker = new antispam(bot);
spamtracker.on("debug", (content) => {
	console.log(content);
});
