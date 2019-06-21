//Algorithm for detecting spam with various inputs
class SpamTracker{
	constructor(options = {}){
		this.thresholdChecker = new Map();
		this.threshold = options.threshold;
		this.timeframe = options.timeframe;
	}

	evaluate(whatToCount, userID){
		let thresholds_user = this.thresholdChecker.get(userID);
		
	}
}

module.exports = SpamTracker;