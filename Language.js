/**
 * Created by Dean on 6/27/2015.
 */

var NAMEIFY = (function (NAMEIFY) {
	"use strict";
	function createLanguage() {
		var that = {},
			currentState,
			vowels = "aaaeeeiiiooouuyy",
			fricatives = "rsfhvnmz",
			plosive = "tpdgkbc",
			weird = "qwjx";

		function selectRandomState() {
			var randValue = Math.random();

			if (randValue < .25) {
				return vowels;
			} else if (randValue < .5) {
				return fricatives;
			} else if (randValue < .85) {
				return plosive;
			} else {
				return weird;
			}
		}

		function selectStateWithChances(vowelChance, frictiveChance, plosiveChance) {
			var randValue = Math.random();

			if (randValue < vowelChance) {
				return vowels;
			} else if (randValue < frictiveChance) {
				return fricatives;
			} else if (randValue < plosiveChance) {
				return plosive;
			} else {
				return weird;
			}
		}

		function randomLetterFromState(state) {
			return state.charAt(Math.floor(Math.random() * state.length));
		}

		function generateName(length) {
			var name = "";
			currentState = selectRandomState();

			while (name.length < length) {
				name = name.concat(randomLetterFromState(currentState));

				switch (currentState) {
					case vowels:
						currentState = selectStateWithChances(.1, .4, .7);
						break;
					case fricatives:
						currentState = selectStateWithChances(.5, 0, 1);
						break;
					case plosive:
						currentState = selectStateWithChances(.9, 1, 0);
						break;
					case weird:
						currentState = vowels;
						break;
				}
			}

			return name;
		}

		that.generateName = generateName;

		that.vowels = vowels;
		that.frictives = fricatives;
		that.plosive = plosive;
		that.weird = weird;

		return that;
	}

	NAMEIFY.createLanguage = createLanguage;

	var lang = createLanguage();


	for (var n = 0, nMax = 40; n < nMax; n++) {
		console.log(lang.generateName(8));
	}

	return NAMEIFY;
}(NAMEIFY || {}));