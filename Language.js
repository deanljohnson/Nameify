/**
 * Created by Dean on 6/27/2015.
 */

var NAMEIFY = (function (NAMEIFY) {
	function createLanguage() {
		var that = {},
			currentState,
			vowels = "",
			fricatives = "",
			plosive = "",
			weird = "";

		function selectRandomState() {
			var randValue = Math.random();

			if (randValue < .3) {
				return vowels;
			} else if (randValue < .4) {
				return fricatives;
			} else if (randValue < .7) {
				return plosive;
			} else {
				return weird;
			}
		}

		function randomLetterFromState(state) {
			return state[Math.floor(Math.random() * state.length)];
		}

		function generateName(length) {
			var name = "",
				prime = false;
			currentState = selectRandomState();

			while (name.length < length) {
				name = name.concat(randomLetterFromState(currentState));

				var randValue = Math.random();
				switch (currentState) {
					case vowels:
						if (!prime && randValue < .1) {
							currentState = vowels;
							prime = true;
							break;
						} else if (randValue < .4) {
							currentState = fricatives;
						} else if (randValue < .7) {
							currentState = plosive;
						} else {
							currentState = weird;
						}
						prime = false;
						break;
					case fricatives:
						if (!prime && randValue < .5) {
							currentState = plosive;
							prime = true;
							break;
						}
						currentState = vowels;
						prime = false;
						break;
					case plosive:
						if (!prime && randValue < .1) {
							currentState = fricatives;
							prime = true;
							break;
						}
						currentState = vowels;
						prime = false;
						break;
					case weird:
						currentState = vowels;
						prime = false;
						break;
				}
			}

			return name;
		}



		that.generateName = generateName;

		that.setVowels = function(value) { vowels = value; };
		that.setFricatives = function(value) { fricatives = value; };
		that.setPlosive = function(value) { plosive = value; };
		that.setWeird = function(value) { weird = value; };

		that.getVowels = function() { return vowels; };
		that.getFricatives = function() { return fricatives; };
		that.getPlosive = function() { return plosive; };
		that.getWeird = function() { return weird; };

		return that;
	}

	NAMEIFY.createLanguage = createLanguage;

	return NAMEIFY;
}(NAMEIFY || {}));