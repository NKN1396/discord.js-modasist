const moment = require("moment");

exports.profanities = function(client, channel_text_logs_id){
	client.on("message", (message)=>{
		if(message.author.id == client.user.id) return; //message not issued by Nova itself
		var profanityList = require("./resources/profanities.json");
		var profanities_used = [];
		for (var profanity of profanityList){
			if(message.content.toLowerCase().match(profanity)){ //.replace(/\s/g,'') remove all whitespace
				profanities_used.push(profanity);
			}
		}
		if(profanities_used.length == 0) return;
		client.users.get(channel_text_logs_id).send(
			`⚠️ Profanity from ${(message.member)?(message.member.displayName):(message.author.username)} in ${(message.channel.name)?(message.channel.name):("a DM")}:\n${message.content.substr(0,100)}`,
			{
				"embed": {
					"title": "Message:",
					"description" : message.content,
					"color": 15844367, //Yellow
					"fields": [
						{
							"name": "Author",
							"value": `${message.author} (\`${(message.member)?(message.member.displayName):(message.author.username)}\`)`,
							"inline": true
						},
						{
							"name": "Channel",
							"value": `${message.channel} (${(message.channel.name)?("`"+message.channel.name+"`"):("DM")})`,
							"inline": true
						},
						{
							"name": (profanities_used.length==1)?("Word"):("Words"),
							"value": profanities_used.toString(),
							"inline": true
						},
						{
							"name": "ID",
							"value": message.id,
							"inline": true
						},
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
};

exports.capslock = function(client, channel_text_logs_id){
	client.on("message", (message)=>{
		if(message.author.id == client.user.id) return; //message not issued by Nova itself
		if(message.content.length < 20) return;
		var letters_uppercase = message.content.length - message.content.replace(/[A-Z]/g, "").length; //Change to [\p{Ll}\s] once ECMAscript 2018 finally gets released 🙄
		var letters_total = message.content.length - message.content.replace(/[A-Za-z]/g, "").length;
		var capsratio = letters_uppercase / letters_total;
		if(capsratio < 0.5) return;
		client.users.get(channel_text_logs_id).send(
			`⚠️ Capslock from ${(message.member)?(message.member.displayName):(message.author.username)} in ${(message.channel.name)?(message.channel.name):("a DM")}:\n${message.content.substr(0,100)}`,
			{
				"embed": {
					"title": "Message:",
					"description" : message.content,
					"color": 15844367, //Yellow
					"fields": [
						{
							"name": "Author",
							"value": `${message.author} (\`${(message.member)?(message.member.displayName):(message.author.username)}\`)`,
							"inline": true
						},
						{
							"name": "Channel",
							"value": `${message.channel} (${(message.channel.name)?("`"+message.channel.name+"`"):("DM")})`,
							"inline": true
						},
						{
							"name": "Ratio",
							"value": `${(capsratio*100).toFixed()}%`,
							"inline": true
						},
						{
							"name": "ID",
							"value": message.id,
							"inline": true
						},
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
};

/*
exports.spam = function(client, channel_text_logs_id){
	const time_period = 60000; //1 minute
	var mentions_during_last_time_period = new Map();
	var links_during_last_time_period = new Map();
	var attachments_during_last_time_period = new Map();
	const threshold_mentions = 4;
	const threshold_links = 5;
	const threshold_attachments = 2;
	client.on("message", (message)=>{
		if(message.content.toLowerCase.match("discord.gg/")){
			//ALERT
		}
		let mentions_DLTP_currentUser = mentions_during_last_time_period.get(message.author.id);
		let links_DLTP_currentUser = links_during_last_time_period.get(message.author.id);
		let attachments_DLTP_currentUser = attachments_during_last_time_period.get(message.author.id);
		for(var type of [mentions_DLTP_currentUser, links_DLTP_currentUser, attachments_DLTP_currentUser]){
			if(!type){
				type = 0;

			}
		}
	});
};
*/

exports.deleted = function(client, channel_text_logs_id){
	client
		.on("messageDelete", (message)=>{
			/*
			var attachmentsNew = [];
			for(var attachment of message.attachments.values()){
				attachmentsNew.push(attachment.url);
			}
			client.users.get(channel_text_logs_id).send(
				"**🗑 Delete**: from " + message.author + " in " + message.channel
				+ ((attachmentsNew.length>0)?(" with " + attachmentsNew.length + " attachment/s"):"")
				+ "\n"
				+ ((message.content)?(message.content):""),
				{files: attachmentsNew}
			).catch(function() {
				client.users.get(channel_text_logs_id).send(
					"**🗑 Delete**: from " + message.author + " in " + message.channel
					+ ((attachmentsNew.length>0)?(" with " + attachmentsNew.length + " attachment/s"):"")
					+ "\n"
					+ ((message.content)?(message.content):"")
				);
			});
			*/
			client.users.get(channel_text_logs_id).send(
				`🗑 Delete from ${(message.member)?(message.member.displayName):(message.author.username)} in ${(message.channel.name)?(message.channel.name):("a DM")}${(message.content.length > 0)?":\n":""}${message.content.substr(0,100)}`,
				{
					"embed": {
						"title": "Deleted message:",
						"description" : message.content,
						"color": 15105570, //Orange
						"fields": [
							{
								"name": "Author",
								"value": `${message.author} (\`${(message.member)?(message.member.displayName):(message.author.username)}\`)`,
								"inline": true
							},
							{
								"name": "Channel",
								"value": `${message.channel} (${(message.channel.name)?("`"+message.channel.name+"`"):("DM")})`,
								"inline": true
							},
							{
								"name": ("Attachments"),
								"value": message.attachments.size,
								"inline": true
							},
							{
								"name": "ID",
								"value": message.id,
								"inline": true
							},
							{
								"name": "Date",
								"value": moment.utc().format(),
								"inline": true
							}
						]
					}
				}
			);
			console.log("MESSAGE DELETED: from " + message.author.tag + " in " + message.channel.name);
		});
};

exports.edited = function(client, channel_text_logs_id){
	client
		.on("messageUpdate", (oldMessage, newMessage)=>{
			if(newMessage.author.id == client.user.id) return; //Prevents messages from Nova itself since those are safe
			if(newMessage.content == oldMessage.content) return; //Prevents embeds from users (e.g. YouTube-links auto-embedding)
			if(newMessage.author.bot) return; //Prevents embeds from other bots
			client.users.get(channel_text_logs_id).send(
				`♻️ Edit from ${(newMessage.member)?(newMessage.member.displayName):(newMessage.author.username)} in ${(newMessage.channel.name)?(newMessage.channel.name):("a DM")}${(newMessage.content.length > 0)?":\n":""}${newMessage.content.substr(0,100)}`,
				{
					"embed": {
						"title": "Old message:",
						"description" : oldMessage.content,
						"color": 15844367, //Yellow
						"fields": [
							{
								"name": "Author",
								"value": `${newMessage.author} (\`${(newMessage.member)?(newMessage.member.displayName):(newMessage.author.username)}\`)`,
								"inline": true
							},
							{
								"name": "Channel",
								"value": `${newMessage.channel} (${(newMessage.channel.name)?("`"+newMessage.channel.name+"`"):("DM")})`,
								"inline": true
							},
							{
								"name": "ID",
								"value": newMessage.id,
								"inline": true
							},
							{
								"name": "Date",
								"value": moment.utc().format(),
								"inline": true
							}
						]
					}
				}
			);
			console.log("MESSAGE EDITED: by " + oldMessage.author.tag + " in " + oldMessage.channel.name);
		});
};

module.exports = exports;
