var EventEmitter = require("events");
const profanityCheck = require("./profanity/check");

class Tracker extends EventEmitter{
	constructor(client, options = {}){
		super();
		if(!options){
			this.options = {
				trackProfanityMessages : true,
				trackProfanityUsername : true,
				trackProfanityNickname : true,
				trackSpamMessages : true,
				trackSpamMentions : true,
				trackSpamDuplicates : true,
				trackSpamCapslock : true,
				trackSpamAttachments : true,
				trackSpamNewlines : true,
				trackSpamEmojis : true,
				trackSpamLinks : true,
				trackSpamTyping : true
			};
		}
		//if(!options.trackProfanityMessages) this.options.trackProfanityMessages = true;
		client
			.on("message", (message) => {
				var profanities = profanityCheck(message.content);
				if (profanities.length > 0){
					this.emit("profanityMessage", message, profanities);
					this.emit("debug", [message.content, profanities]);
				}
			})
			.on("userUpdate", (oldUser, newUser) => {
				var profanities = profanityCheck(newUser.username);
				if (profanities.length > 0){
					this.emit("profanityUsername", newUser, profanities);
				}
			})
			.on("guildMemberUpdate", (oldMember, newMember) => {
				var profanities = profanityCheck(newMember.nickname);
				if (profanities.length > 0){
					this.emit("profanityNickname", newMember, profanities);
				}
			});
		//"spamMessageMentions"
	}
}

module.exports = Tracker;
