module.exports = function(string){
	var tokens = require("./token.json");
	var words = require("./word.json");
	var profanities = [];
	var string_prepared = string.toLowerCase();
	//Accurate method, finds anything but over-reacts sometimes.
	//Use for words that don't make any sense in any context e.g. "Nigger".
	for(var token of tokens){
		if(string_prepared.match(token)){
			profanities.push(token);
		}
	}
	//Heuristic method, only finds exact words but doesn't over-react as often.
	//Use for words that might be part of another word e.g. "fag" in "ifage"
	string_prepared = string_prepared.replace(/[^A-Za-z0-9\s]/g,"").split(/\s+/g);
	for(var word of words){
		for(var split of string_prepared){
			if(word == split){
				profanities.push(word);
			}
		}
	}
	return profanities;
};
