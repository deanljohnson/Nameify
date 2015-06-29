/**
 * Created by Dean on 6/28/2015.
 */

var NAMEIFY = (function () {
	function createLanguageGenerator() {
		var that = {};

		function setVowels(language) {
			language.setVowels("aaaeeeiiiooouuyy");
		}

		function setFricatives(language) {
			var voicedAndUnvoicedFricatives = (Math.random() < .5);

			if (voicedAndUnvoicedFricatives) {
				language.setFricatives("rsfhvnmz");
			} else {
				var useVoicedFricatives = (Math.random() < .5);

				language.setFricatives((useVoicedFricatives) ? "rhvnmz" : "rsfhnm");
			}
		}

		function setPlosives(language) {
			language.setPlosive("tpkdbgc");

			var hasVoicelessStops = (Math.random() < .97);
			var hasVoicedStops = (Math.random() < .5);
			var plosives = "";

			plosives = (hasVoicelessStops) ? plosives.concat("tpk") : plosives;
			plosives = (hasVoicedStops) ? plosives.concat("dbg") : plosives;
			plosives = plosives.concat("c");

			language.setPlosive(plosives);
		}

		function setWeirds(language) {
			language.setWeird("qwjx");
		}

		function generateLanguage() {
			var lang = NAMEIFY.createLanguage();

			setVowels(lang);
			setFricatives(lang);
			setPlosives(lang);
			setWeirds(lang);

			return lang;
		}

		that.generateLanguage = generateLanguage;

		return that;
	}

	NAMEIFY.createLanguageGenerator = createLanguageGenerator;

	return NAMEIFY;
}(NAMEIFY || {}));